import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Menu, User, Bell, LogOut, Home } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const { user, logout, userRole } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  const getHomeRoute = () => {
    if (!user) return '/login';
    
    switch (user.role) {
      case 'client':
        return '/client';
      case 'provider':
        return '/provider';
      case 'admin':
        return '/admin';
      default:
        return '/login';
    }
  };
  
  return (
    <header className="header">
      <div className="header-container">
        <Link to={getHomeRoute()} className="logo">
          <span className="logo-icon">✨</span>
                          <span className="logo-text">Axel Services</span>
        </Link>
        
        {user && (
          <div className="header-content">
            <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu size={24} />
            </button>
            
            <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
              <ul>
                <li>
                  <Link to={getHomeRoute()}>
                    <Home size={18} />
                    <span>Home</span>
                  </Link>
                </li>
                {userRole === 'client' && (
                  <>
                    <li>
                      <Link to="/client/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/client/bookings">My Bookings</Link>
                    </li>
                    <li>
                      <Link to="/client/addresses">Addresses</Link>
                    </li>
                  </>
                )}
                {userRole === 'provider' && (
                  <>
                    <li>
                      <Link to="/provider/missions">My Missions</Link>
                    </li>
                    <li>
                      <Link to="/provider/payments">Payments</Link>
                    </li>
                  </>
                )}
                {userRole === 'admin' && (
                  <>
                    <li>
                      <Link to="/admin/users">Users</Link>
                    </li>
                    <li>
                      <Link to="/admin/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/admin/schedule">Schedule</Link>
                    </li>
                    <li>
                      <Link to="/admin/payments">Payments</Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
            
            <div className="header-actions">
              <button className="icon-btn notification-btn">
                <Bell size={20} />
                <span className="notification-badge">3</span>
              </button>
              
              <div className="user-menu">
                <button className="user-menu-btn">
                  {user.avatar ? (
                    <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} className="avatar" />
                  ) : (
                    <div className="avatar-placeholder">
                      {user.firstName[0]}{user.lastName[0]}
                    </div>
                  )}
                  <span className="user-name">{user.firstName}</span>
                </button>
                
                <div className="user-dropdown">
                  <ul>
                    <li>
                      <Link to={`/${userRole}/profile`}>
                        <User size={16} />
                        <span>Profile</span>
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="logout-btn">
                        <LogOut size={16} />
                        <span>Logout</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;