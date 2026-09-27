export default function Loading({ message = 'Generating your perfect itinerary...' }) {
  return (
    <div className="loading-state">
      <div className="spinner" />
      <p>{message}</p>
      <small>This may take a few seconds</small>
    </div>
  );
}
