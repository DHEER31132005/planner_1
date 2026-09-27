import { useState, useRef } from 'react';
import { generateItinerary } from '../../services/aiService';
import Loading from '../common/Loading';
import ErrorMessage from '../common/ErrorMessage';
import Itinerary from './Itinerary';
import { Sparkles } from 'lucide-react';

export default function TripPlanner({ prefillDestination }) {
  const [prompt, setPrompt] = useState(
    prefillDestination
      ? `Plan a 5-day trip to ${prefillDestination.name}. I love ${prefillDestination.tags.slice(0, 2).join(' and ')}.`
      : ''
  );
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortRef = useRef(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    // Cancel any previous request
    if (abortRef.current) {
      abortRef.current.abort();
    }
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);
    // Do NOT clear itinerary yet – prevents flash of empty state

    try {
      const data = await generateItinerary(prompt.trim(), controller.signal);
      // Only update if this request is still the latest
      if (!controller.signal.aborted) {
        setItinerary(data);
      }
    } catch (err) {
      if (err.name === 'AbortError') return;
      setError(err.message || 'Failed to generate itinerary');
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  };

  return (
    <div className="planner-section">
      <div className="planner-input-card">
        <h2>
          <Sparkles size={22} /> Custom Trip Planner
        </h2>
        <p className="hint">
          Describe your dream trip in free text. Example: “5 days in Japan, love food and temples, budget $1500, traveling with partner”
        </p>

        <textarea
          rows={4}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your trip..."
          disabled={loading}
        />

        <div className="planner-actions">
          <button
            className="btn-primary"
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
          >
            {loading ? 'Generating...' : 'Generate Itinerary'}
          </button>
          {itinerary && !loading && (
            <button className="btn-ghost" onClick={() => setItinerary(null)}>
              Clear
            </button>
          )}
        </div>
      </div>

      {loading && <Loading />}
      {error && !loading && (
        <ErrorMessage message={error} onRetry={handleGenerate} />
      )}
      {!loading && !error && itinerary && (
        <Itinerary itinerary={itinerary} onChange={setItinerary} />
      )}
      {!loading && !error && !itinerary && (
        <div className="empty-state">
          <p>Your interactive itinerary will appear here.</p>
          <small>You will be able to expand days, drag to reorder stops, and remove activities.</small>
        </div>
      )}
    </div>
  );
}
