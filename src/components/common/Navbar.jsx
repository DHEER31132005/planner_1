import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { MapPin, LogOut, User, Plane } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo">
          <Plane size={22} />
          <span>TripCraft AI</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Explore</Link>
          {user && <Link to="/planner">My Planner</Link>}
        </div>

        <div className="nav-auth">
          {user ? (
            <>
              <span className="user-name">
                <User size={16} /> {user.name}
              </span>
              <button className="btn-ghost" onClick={handleLogout}>
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-ghost">Login</Link>
              <Link to="/signup" className="btn-primary">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
