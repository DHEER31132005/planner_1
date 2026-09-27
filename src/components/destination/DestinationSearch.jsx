import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { destinations, popularSearches } from '../../data/destinations';

export default function DestinationSearch() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return destinations.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        d.region.toLowerCase().includes(q) ||
        d.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  const handleSelect = (dest) => {
    setQuery('');
    setFocused(false);
    navigate(`/destination/${dest.id}`);
  };

  const clear = () => {
    setQuery('');
  };

  return (
    <div className="search-box">
      <div className="search-input-wrap">
        <Search size={20} className="search-icon" />
        <input
          type="text"
          placeholder="Search by destination, country or region..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
        />
        {query && (
          <button className="clear-btn" onClick={clear}>
            <X size={18} />
          </button>
        )}
      </div>

      {focused && (
        <div className="search-dropdown">
          {query.trim() === '' ? (
            <>
              <p className="dropdown-label">Popular searches</p>
              <div className="popular-chips">
                {popularSearches.map((s) => (
                  <button key={s} onClick={() => setQuery(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </>
          ) : results.length > 0 ? (
            results.map((d) => (
              <button
                key={d.id}
                className="search-result"
                onClick={() => handleSelect(d)}
              >
                <img src={d.image} alt="" />
                <div>
                  <strong>{d.name}</strong>
                  <span>
                    {d.region}, {d.country} · ★ {d.rating} · From ${d.startingPrice} · {d.packagesAvailable} packages
                  </span>
                </div>
              </button>
            ))
          ) : (
            <p className="no-results">No destinations found for "{query}"</p>
          )}
        </div>
      )}
    </div>
  );
}
