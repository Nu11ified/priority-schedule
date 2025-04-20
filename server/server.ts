import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();

// Example of receiving data from client
onNet('inkwell-react-template:buttonClicked', (message: any) => {
  const source = global.source
  console.log(`Player ${source} clicked button with message: ${message}`)
 
  // Example of sending data back to client
  emitNet('inkwell-react-template:updateFromServer', source, {
    receivedAt: new Date().toISOString()
  })
})

// Rate limit storage - tracks cooldowns per user
const rateLimits = new Map<any, any>()

// Helper to clean up expired rate limits
const cleanupRateLimits = () => {
  const now = Date.now()
  for (const [userId, limits] of rateLimits.entries()) {
    for (const [actionId, timestamp] of Object.entries(limits as any)) {
      if (now - (timestamp as any).lastAction >= (timestamp as any).cooldown) {
        delete (limits as any)[actionId]
      }
    }
    if (Object.keys(limits).length === 0) {
      rateLimits.delete(userId)
    }
  }
}

// Run cleanup every minute
setInterval(cleanupRateLimits, 60000)

// Check if an action is rate limited
const isRateLimited = (userId: any, actionId: any) => {
  const userLimits = rateLimits.get(userId)
  if (!userLimits || !userLimits[actionId]) return false

  const { lastAction, cooldown } = userLimits[actionId]
  const now = Date.now()
  return now - lastAction < cooldown
}

// Set rate limit for a user's action
const setRateLimit = (userId: any, actionId: any, cooldown: any) => {
  if (!rateLimits.has(userId)) {
    rateLimits.set(userId, {})
  }
  
  const userLimits = rateLimits.get(userId)
  userLimits[actionId] = {
    lastAction: Date.now(),
    cooldown
  }
}

// Handle rate limit check requests from clients
onNet('inkwell-react-template:checkRateLimit', (actionId: any, cooldown: any) => {
  const src = source
  // Use the player's source as their ID since it's unique per session
  const userId = src.toString()

  if (isRateLimited(userId, actionId)) {
    emitNet('inkwell-react-template:rateLimitResponse', src, {
      actionId,
      allowed: false
    })
    return
  }

  setRateLimit(userId, actionId, cooldown)
  emitNet('inkwell-react-template:rateLimitResponse', src, {
    actionId,
    allowed: true
  })
})

// Handle prio request submission from UI
onNet('submitPrioRequest', async (data: any) => {
  const src = global.source;
  try {
    // Data expected: { creatorId, location, plan, involved, callText }
    const prio = await prisma.prioRequest.create({
      data: {
        creatorId: data.creatorId,
        location: data.location,
        plan: data.plan,
        involved: Array.isArray(data.involved) ? JSON.stringify(data.involved) : data.involved,
        callText: data.callText,
        status: 'PENDING',
      },
    });
    emitNet('submitPrioRequest:response', src, { success: true, prio });
  } catch (error: any) {
    emitNet('submitPrioRequest:response', src, { success: false, error: error.message });
  }
});

// Handle accepting a prio request
onNet('acceptPrioRequest', async (data: any) => {
  const src = global.source;
  try {
    // Data expected: { prioId, note }
    const prio = await prisma.prioRequest.update({
      where: { id: data.prioId },
      data: {
        status: 'ACCEPTED',
        note: data.note || null,
      },
    });
    emitNet('acceptPrioRequest:response', src, { success: true, prio });
  } catch (error: any) {
    emitNet('acceptPrioRequest:response', src, { success: false, error: error.message });
  }
});

// Handle denying a prio request
onNet('denyPrioRequest', async (data: any) => {
  const src = global.source;
  try {
    // Data expected: { prioId, note }
    if (!data.note) {
      emitNet('denyPrioRequest:response', src, { success: false, error: 'A note is required when denying a prio.' });
      return;
    }
    const prio = await prisma.prioRequest.update({
      where: { id: data.prioId },
      data: {
        status: 'DENIED',
        note: data.note,
      },
    });
    emitNet('denyPrioRequest:response', src, { success: true, prio });
  } catch (error: any) {
    emitNet('denyPrioRequest:response', src, { success: false, error: error.message });
  }
});

// Move an accepted prio to the queue
onNet('queuePrioRequest', async (data: any) => {
  const src = global.source;
  try {
    // Data expected: { prioId }
    const prio = await prisma.prioRequest.update({
      where: { id: data.prioId },
      data: { status: 'QUEUED' },
    });
    emitNet('queuePrioRequest:response', src, { success: true, prio });
  } catch (error: any) {
    emitNet('queuePrioRequest:response', src, { success: false, error: error.message });
  }
});

// Utility: Check if a player has a given ace permission
function hasAcePerm(playerId: string, perm: string): boolean {
  // @ts-ignore (FiveM native)
  return IsPlayerAceAllowed(playerId, perm);
}

// Utility: Get all players with a given ace permission
function getPlayersWithAcePerm(perm: string): number[] {
  // @ts-ignore (FiveM native)
  const players = typeof GetPlayers === 'function' ? GetPlayers() : [];
  return players
    .filter((id: string) => hasAcePerm(id, perm))
    .map((id: string) => Number(id));
}

// Utility: Notify a list of players
function notifyPlayers(playerIds: string[], event: string, data: any) {
  for (const id of playerIds) {
    emitNet(event, id, data);
  }
}

// Activate the next prio in the queue (with aceperm and notification logic)
onNet('nextPrio', async () => {
  const src = String(global.source);
  if (!hasAcePerm(src, 'prioresponder')) {
    emitNet('nextPrio:response', src, { success: false, error: 'No permission.' });
    return;
  }
  try {
    // Find the next queued prio
    const next = await prisma.prioRequest.findFirst({
      where: { status: 'QUEUED' },
      orderBy: { createdAt: 'asc' },
    });
    if (!next) {
      emitNet('nextPrio:response', src, { success: false, error: 'No prio in queue.' });
      return;
    }
    // Set status to ACTIVE
    const activePrio = await prisma.prioRequest.update({
      where: { id: next.id },
      data: { status: 'ACTIVE' },
    });
    // Notify creator and involved users
    const involved = JSON.parse(activePrio.involved || '[]');
    const notifyIds = [activePrio.creatorId, ...involved].filter(Boolean);
    notifyPlayers(notifyIds, 'prio:notify', { prio: activePrio });
    // Notify all prioviewers
    const prioviewers = getPlayersWithAcePerm('prioview').map(String);
    notifyPlayers(prioviewers, 'prio:view', { callText: activePrio.callText, prio: activePrio });
    emitNet('nextPrio:response', src, { success: true, prio: activePrio });
  } catch (error: any) {
    emitNet('nextPrio:response', src, { success: false, error: error.message });
  }
});

// Fetch the current prio queue
onNet('getPrioQueue', async () => {
  const src = global.source;
  try {
    const queue = await prisma.prioRequest.findMany({
      where: { status: { in: ['QUEUED', 'ACTIVE'] } },
      orderBy: { createdAt: 'asc' },
    });
    emitNet('getPrioQueue:response', src, { success: true, queue });
  } catch (error: any) {
    emitNet('getPrioQueue:response', src, { success: false, error: error.message });
  }
});

export {} 