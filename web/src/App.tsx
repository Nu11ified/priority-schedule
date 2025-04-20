import { useState, useRef, useCallback, useEffect, KeyboardEvent } from 'react'
import { useNui } from './providers/NuiProvider'
import { Card, CardHeader, CardContent, CardFooter } from './components/ui/Card'
import { Button } from './components/ui/Button'
import { useEventListener } from './hooks/useEventListener'
import { makeElementDraggable } from './hooks/useDraggable'
import { useRateLimit } from './hooks/useRateLimit'
import { selectVisible, useNuiSelector } from './stores/nui'
import PrioSubmit from './components/PrioSubmit'
import PrioResponderDashboard from './components/PrioResponderDashboard'

interface Action {
  id: string
  label: string
  variant: 'primary' | 'secondary' | 'danger'
  shortcut: string
}

const ACTIONS: Action[] = [
  { id: 'action1', label: 'Primary Action', variant: 'primary', shortcut: 'P' },
  { id: 'action2', label: 'Secondary Action', variant: 'secondary', shortcut: 'S' },
  { id: 'action3', label: 'Danger Action', variant: 'danger', shortcut: 'D' }
]

export default function App() {
  const { sendMessage, hideFrame } = useNui()
  const visible = useNuiSelector(selectVisible)
  const [lastAction, setLastAction] = useState<string | null>(null)
  const submitRef = useRef<HTMLDivElement | null>(null)
  const responderRef = useRef<HTMLDivElement | null>(null)

  // Rate limit setup for primary action (2 seconds)
  const {
    isRateLimited: isPrimaryActionLimited,
    performAction: performPrimaryAction,
    rateLimitMessage: primaryActionMessage
  } = useRateLimit('primaryAction', 2000)

  // Make the cards draggable once they're mounted
  useEffect(() => {
    if (visible && submitRef.current) {
      const cleanup = makeElementDraggable(submitRef.current, '.card-header')
      return cleanup
    }
  }, [visible])

  useEffect(() => {
    if (visible && responderRef.current) {
      const cleanup = makeElementDraggable(responderRef.current, '.card-header')
      return cleanup
    }
  }, [visible])

  // Handle keyboard shortcuts
  const handleKeyPress = useCallback((e: KeyboardEvent | KeyboardEventInit) => {
    const key = 'key' in e ? e.key : (e as any).key
    const action = ACTIONS.find(a => a.shortcut.toLowerCase() === key?.toLowerCase())
    if (action) {
      const message = `${action.label} was triggered by keyboard (${action.shortcut})`
      setLastAction(message)
      sendMessage('buttonClicked', { message })
    }
  }, [sendMessage])

  // Register keyboard event listener
  useEventListener('keypress', handleKeyPress)

  // Register ESC key listener
  useEventListener('keydown', (e: KeyboardEvent | KeyboardEventInit) => {
    const key = 'key' in e ? e.key : (e as any).key
    if (key === 'Escape') {
      hideFrame()
    }
  })

  if (!visible) return null

  return (
    <>
      <div ref={submitRef} style={{ position: 'absolute', top: 100, left: 100 }}>
        <PrioSubmit />
      </div>
      <div ref={responderRef} style={{ position: 'absolute', top: 100, left: 700 }}>
        <PrioResponderDashboard />
      </div>
    </>
  )
} 