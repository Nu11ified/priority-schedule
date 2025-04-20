import { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './ui/Card';
import { Button } from './ui/Button';
import { useNui } from '../providers/NuiProvider';

export default function PrioSubmit() {
  const { sendMessage } = useNui();
  const [location, setLocation] = useState('');
  const [plan, setPlan] = useState('');
  const [involved, setInvolved] = useState('');
  const [callText, setCallText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    const involvedArr = involved.split(',').map(s => s.trim()).filter(Boolean);
    const creatorId = (window as any).GetPlayerServerId ? (window as any).GetPlayerServerId() : '';
    const res = await sendMessage('submitPrioRequest', {
      creatorId,
      location,
      plan,
      involved: involvedArr,
      callText
    });
    setLoading(false);
    if (res?.success) {
      setSuccess(true);
      setLocation('');
      setPlan('');
      setInvolved('');
      setCallText('');
    } else {
      setError(res?.error || 'Failed to submit prio request.');
    }
  };

  return (
    <Card className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <h2 className="text-xl font-bold text-white">Submit Priority Request</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-white mb-1">Location</label>
            <input className="w-full p-2 rounded bg-gray-800 text-white" value={location} onChange={e => setLocation(e.target.value)} required />
          </div>
          <div>
            <label className="block text-white mb-1">Plan</label>
            <textarea className="w-full p-2 rounded bg-gray-800 text-white" value={plan} onChange={e => setPlan(e.target.value)} required />
          </div>
          <div>
            <label className="block text-white mb-1">Involved Users (comma-separated IDs)</label>
            <input className="w-full p-2 rounded bg-gray-800 text-white" value={involved} onChange={e => setInvolved(e.target.value)} required />
          </div>
          <div>
            <label className="block text-white mb-1">911 Call Text</label>
            <textarea className="w-full p-2 rounded bg-gray-800 text-white" value={callText} onChange={e => setCallText(e.target.value)} required />
          </div>
          {error && <div className="text-red-400">{error}</div>}
          {success && <div className="text-green-400">Prio request submitted!</div>}
        </CardContent>
        <CardFooter>
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Prio'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
} 