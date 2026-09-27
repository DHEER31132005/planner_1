import { useNavigate } from 'react-router-dom';
import { Star, Package, Calendar, MapPin } from 'lucide-react';

export default function DestinationCard({ dest }) {
  const navigate = useNavigate();

  const handlePlanTrip = (e) => {
    e.stopPropagation();
    navigate(`/destination/${dest.id}`);
  };

  const handleCardClick = () => {
    navigate(`/destination/${dest.id}`);
  };

  return (
    <div className="dest-card" onClick={handleCardClick}>
      <div className="dest-image-wrap">
        <img src={dest.image} alt={dest.name} loading="lazy" />
        <div className="price-badge">
          From ${dest.startingPrice}
        </div>
      </div>

      <div className="dest-body">
        <h3>{dest.name}</h3>
        <p className="dest-location">
          <MapPin size={13} /> {dest.region}, {dest.country}
        </p>
        <p className="dest-desc">{dest.description}</p>

        <div className="dest-meta">
          <span className="rating">
            <Star size={14} fill="#fbbf24" color="#fbbf24" />
            {dest.rating} <small>({dest.reviews.toLocaleString()})</small>
          </span>
          <span className="availability">
            <Package size={14} /> {dest.packagesAvailable} packages
          </span>
        </div>

        <div className="dest-tags">
          {dest.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="dest-footer">
          <span className="best-time">
            <Calendar size={13} /> Best: {dest.bestTime}
          </span>
          <button className="btn-sm" onClick={handlePlanTrip}>
            Plan Trip
          </button>
        </div>
      </div>
    </div>
  );
}
