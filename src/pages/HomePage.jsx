import DestinationSearch from '../components/destination/DestinationSearch';
import DestinationCard from '../components/destination/DestinationCard';
import TripPlanner from '../components/trip/TripPlanner';
import { destinations } from '../data/destinations';

export default function HomePage() {
  return (
    <div className="home">
      {/* Hero + Search */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Plan your next adventure with AI</h1>
          <p>
            Search by destination, country or region. Compare ratings, prices & packages, then generate a fully interactive itinerary.
          </p>
          <DestinationSearch />
        </div>
      </section>

      {/* Destination Grid */}
      <section className="destinations-section">
        <div className="section-header">
          <h2>Popular Destinations</h2>
          <p>Ratings · Prices · Packages · Countries & Regions</p>
        </div>

        <div className="dest-grid">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} dest={dest} />
          ))}
        </div>
      </section>

      {/* General AI Planner */}
      <section className="planner-wrapper">
        <TripPlanner />
      </section>
    </div>
  );
}
