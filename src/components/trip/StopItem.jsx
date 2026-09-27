import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Trash2, Clock, MapPin } from 'lucide-react';

export default function StopItem({ stop, onRemove }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: stop.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className={`stop-item ${isDragging ? 'dragging' : ''}`}>
      <button className="drag-handle" {...attributes} {...listeners}>
        <GripVertical size={18} />
      </button>

      <div className="stop-content">
        <div className="stop-header">
          <span className="stop-time">
            <Clock size={13} /> {stop.time}
          </span>
          <h4>{stop.title}</h4>
        </div>
        {stop.description && <p className="stop-desc">{stop.description}</p>}
        <div className="stop-meta">
          {stop.location && (
            <span><MapPin size={12} /> {stop.location}</span>
          )}
          {stop.duration && <span>{stop.duration}</span>}
          {stop.cost && <span className="cost">{stop.cost}</span>}
        </div>
        {stop.tips && <p className="stop-tips">💡 {stop.tips}</p>}
      </div>

      <button className="remove-btn" onClick={() => onRemove(stop.id)} title="Remove stop">
        <Trash2 size={16} />
      </button>
    </div>
  );
}
