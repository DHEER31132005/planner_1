import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { ChevronDown, ChevronUp } from 'lucide-react';
import StopItem from './StopItem';

export default function DayCard({ day, onUpdateStops, onRemoveStop }) {
  const [open, setOpen] = useState(true);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = day.stops.findIndex((s) => s.id === active.id);
    const newIndex = day.stops.findIndex((s) => s.id === over.id);
    const newStops = arrayMove(day.stops, oldIndex, newIndex);
    onUpdateStops(day.dayNumber, newStops);
  };

  return (
    <div className="day-card">
      <button className="day-header" onClick={() => setOpen(!open)}>
        <div>
          <span className="day-number">Day {day.dayNumber}</span>
          <h3>{day.title}</h3>
        </div>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {open && (
        <div className="day-body">
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={day.stops.map((s) => s.id)} strategy={verticalListSortingStrategy}>
              {day.stops.map((stop) => (
                <StopItem
                  key={stop.id}
                  stop={stop}
                  onRemove={(id) => onRemoveStop(day.dayNumber, id)}
                />
              ))}
            </SortableContext>
          </DndContext>

          {day.stops.length === 0 && (
            <p className="empty-stops">No stops left for this day.</p>
          )}
        </div>
      )}
    </div>
  );
}
