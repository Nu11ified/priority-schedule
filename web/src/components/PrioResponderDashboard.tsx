import { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './ui/Card';
import { Button } from './ui/Button';
import { useNui } from '../providers/NuiProvider';

interface PrioRequest {
  id: number;
  creatorId: string;
  location: string;
  plan: string;
  involved: string;
  callText: string;
  status: string;
  note?: string;
  createdAt: string;
  updatedAt: string;
}

export default function PrioResponderDashboard() {
  const { sendMessage } = useNui();
  const [pending, setPending] = useState<PrioRequest[]>([]);
  const [accepted, setAccepted] = useState<PrioRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [note, setNote] = useState<{ [id: number]: string }>({});

  const fetchPrios = async () => {
    setLoading(true);
    setError('');
    const res = await sendMessage('getPrioQueue');
    setLoading(false);
    if (res?.success) {
      setPending(res.queue.filter((p: PrioRequest) => p.status === 'PENDING'));
      setAccepted(res.queue.filter((p: PrioRequest) => p.status === 'ACCEPTED'));
    } else {
      setError(res?.error || 'Failed to fetch prio queue.');
    }
  };

  useEffect(() => {
    fetchPrios();
    // Optionally, poll or use NUI events for real-time updates
  }, []);

  const handleAccept = async (id: number) => {
    setLoading(true);
    setError('');
    const res = await sendMessage('acceptPrioRequest', { prioId: id, note: note[id] || '' });
    setLoading(false);
    if (res?.success) fetchPrios();
    else setError(res?.error || 'Failed to accept prio.');
  };

  const handleDeny = async (id: number) => {
    setLoading(true);
    setError('');
    const res = await sendMessage('denyPrioRequest', { prioId: id, note: note[id] || '' });
    setLoading(false);
    if (res?.success) fetchPrios();
    else setError(res?.error || 'Failed to deny prio.');
  };

  const handleQueue = async (id: number) => {
    setLoading(true);
    setError('');
    const res = await sendMessage('queuePrioRequest', { prioId: id });
    setLoading(false);
    if (res?.success) fetchPrios();
    else setError(res?.error || 'Failed to queue prio.');
  };

  return (
    <Card className="max-w-2xl mx-auto mt-8">
      <CardHeader>
        <h2 className="text-xl font-bold text-white">Prio Responder Dashboard</h2>
      </CardHeader>
      <CardContent className="space-y-6">
        {error && <div className="text-red-400">{error}</div>}
        <div>
          <h3 className="text-lg text-white mb-2">Pending Prio Requests</h3>
          {pending.length === 0 && <div className="text-white/60">No pending prios.</div>}
          {pending.map(prio => (
            <Card key={prio.id} className="mb-4 bg-gray-900">
              <CardContent>
                <div className="text-white font-semibold">Location: {prio.location}</div>
                <div className="text-white">Plan: {prio.plan}</div>
                <div className="text-white">Involved: {prio.involved}</div>
                <div className="text-white">911 Call: {prio.callText}</div>
                <textarea
                  className="w-full mt-2 p-2 rounded bg-gray-800 text-white"
                  placeholder="Responder note (optional)"
                  value={note[prio.id] || ''}
                  onChange={e => setNote(n => ({ ...n, [prio.id]: e.target.value }))}
                />
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="primary" onClick={() => handleAccept(prio.id)} disabled={loading}>Accept</Button>
                <Button variant="danger" onClick={() => handleDeny(prio.id)} disabled={loading}>Deny</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div>
          <h3 className="text-lg text-white mb-2">Accepted Prio Requests</h3>
          {accepted.length === 0 && <div className="text-white/60">No accepted prios.</div>}
          {accepted.map(prio => (
            <Card key={prio.id} className="mb-4 bg-gray-900">
              <CardContent>
                <div className="text-white font-semibold">Location: {prio.location}</div>
                <div className="text-white">Plan: {prio.plan}</div>
                <div className="text-white">Involved: {prio.involved}</div>
                <div className="text-white">911 Call: {prio.callText}</div>
                <div className="text-white">Note: {prio.note}</div>
              </CardContent>
              <CardFooter>
                <Button variant="primary" onClick={() => handleQueue(prio.id)} disabled={loading}>Queue Prio</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 