import DayCard from './DayCard';
import { MapPin, Calendar, DollarSign } from 'lucide-react';

export default function Itinerary({ itinerary, onChange }) {
  if (!itinerary) return null;

  const updateStops = (dayNumber, newStops) => {
    const newDays = itinerary.days.map((d) =>
      d.dayNumber === dayNumber ? { ...d, stops: newStops } : d
    );
    onChange({ ...itinerary, days: newDays });
  };

  const removeStop = (dayNumber, stopId) => {
    const newDays = itinerary.days.map((d) => {
      if (d.dayNumber !== dayNumber) return d;
      return { ...d, stops: d.stops.filter((s) => s.id !== stopId) };
    });
    onChange({ ...itinerary, days: newDays });
  };

  return (
    <div className="itinerary">
      <div className="itinerary-header">
        <h2>{itinerary.tripTitle}</h2>
        <p className="summary">{itinerary.summary}</p>

        <div className="itinerary-meta">
          <span><MapPin size={16} /> {itinerary.destination}</span>
          <span><Calendar size={16} /> {itinerary.durationDays} days</span>
          <span><DollarSign size={16} /> {itinerary.totalEstimatedCost}</span>
        </div>
      </div>

      <div className="days-list">
        {itinerary.days.map((day) => (
          <DayCard
            key={day.dayNumber}
            day={day}
            onUpdateStops={updateStops}
            onRemoveStop={removeStop}
          />
        ))}
      </div>
    </div>
  );
}
