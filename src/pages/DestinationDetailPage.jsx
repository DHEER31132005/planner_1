import { useParams, useNavigate, Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import TripPlanner from '../components/trip/TripPlanner';
import {
  Star, Package, Calendar, MapPin, Bus, Plane,
  ArrowLeft, DollarSign, Tag, Info
} from 'lucide-react';

export default function DestinationDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dest = destinations.find((d) => d.id === Number(id));

  if (!dest) {
    return (
      <div className="detail-page">
        <div className="empty-state">
          <h2>Destination not found</h2>
          <Link to="/" className="btn-primary">Back to Explore</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      {/* Back button */}
      <div className="detail-top">
        <button className="btn-ghost back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} /> Back
        </button>
      </div>

      {/* Hero image + title */}
      <div className="detail-hero">
        <img src={dest.image} alt={dest.name} />
        <div className="detail-hero-overlay">
          <h1>{dest.name}</h1>
          <p className="detail-location">
            <MapPin size={16} /> {dest.region}, {dest.country}
          </p>
        </div>
      </div>

      <div className="detail-content">
        {/* Key stats */}
        <div className="detail-stats">
          <div className="stat-card">
            <Star size={20} fill="#fbbf24" color="#fbbf24" />
            <div>
              <strong>{dest.rating}</strong>
              <span>{dest.reviews.toLocaleString()} reviews</span>
            </div>
          </div>
          <div className="stat-card">
            <DollarSign size={20} color="#0f766e" />
            <div>
              <strong>From ${dest.startingPrice}</strong>
              <span>per person</span>
            </div>
          </div>
          <div className="stat-card">
            <Package size={20} color="#0f766e" />
            <div>
              <strong>{dest.packagesAvailable}</strong>
              <span>packages available</span>
            </div>
          </div>
          <div className="stat-card">
            <Calendar size={20} color="#0f766e" />
            <div>
              <strong>Best time</strong>
              <span>{dest.bestTime}</span>
            </div>
          </div>
        </div>

        {/* About */}
        <section className="detail-section">
          <h2><Info size={18} /> About {dest.name}</h2>
          <p>{dest.description}</p>
          <div className="detail-tags">
            {dest.tags.map((tag) => (
              <span key={tag} className="tag"><Tag size={12} /> {tag}</span>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="detail-section">
          <h2>Top Highlights</h2>
          <ul className="highlights-list">
            {dest.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>

        {/* Transport / Bus info */}
        <section className="detail-section transport-section">
          <h2><Bus size={18} /> Getting Around – Bus & Transport</h2>
          <div className="transport-grid">
            <div className="transport-card">
              <Plane size={18} />
              <div>
                <strong>Airport</strong>
                <p>{dest.transport.airport}</p>
              </div>
            </div>
            <div className="transport-card highlight-bus">
              <Bus size={18} />
              <div>
                <strong>Bus Options</strong>
                <p>{dest.transport.bus}</p>
              </div>
            </div>
            <div className="transport-card">
              <MapPin size={18} />
              <div>
                <strong>Local Transport</strong>
                <p>{dest.transport.local}</p>
              </div>
            </div>
            <div className="transport-card">
              <DollarSign size={18} />
              <div>
                <strong>Average Bus Fare</strong>
                <p>{dest.transport.averageBusFare}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location info */}
        <section className="detail-section">
          <h2><MapPin size={18} /> Location</h2>
          <div className="location-info">
            <p><strong>Country:</strong> {dest.country}</p>
            <p><strong>Region / State:</strong> {dest.region}</p>
            <p><strong>Destination:</strong> {dest.name}</p>
          </div>
        </section>

        {/* AI Planner for this destination */}
        <section className="detail-section planner-on-detail">
          <h2>Plan Your Trip to {dest.name}</h2>
          <p className="hint">Generate a custom day-by-day itinerary with AI</p>
          <TripPlanner prefillDestination={dest} />
        </section>
      </div>
    </div>
  );
}
