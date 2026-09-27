import { AlertCircle, RefreshCw } from 'lucide-react';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-state">
      <AlertCircle size={40} className="error-icon" />
      <h3>Something went wrong</h3>
      <p>{message || 'We could not generate the itinerary. Please try again.'}</p>
      {onRetry && (
        <button className="btn-primary" onClick={onRetry}>
          <RefreshCw size={16} /> Try Again
        </button>
      )}
    </div>
  );
}
