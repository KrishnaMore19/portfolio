import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: ' #222',
      }}
    >
      <div className="container">
        {/* Text Logo */}
        <Link
          className="navbar-brand"
          to="/"  // Changed to direct to "/"
          style={{ color: '#3498DB', fontSize: '24px', fontWeight: 'bold' }}
        >
          My Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: '#2980B9' }}
        >
          <span className="navbar-toggler-icon" style={{ color: '#FFFFFF' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Link to each page */}
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li className="nav-item" key={item}>
                <Link
                  className="nav-link"
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}  // Link to "/" for Home, others use lowercase path
                  style={{
                    color: '#b3cde3',  // Default light blue-gray color
                    position: 'relative',
                    padding: '0 8px',
                    transition: 'color 0.3s ease, border-bottom 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#00FFFF';  // Cyan text color on hover
                    e.target.style.borderBottom = '2px solid #00FFFF';  // Cyan underline
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = '#b3cde3';  // Return to default color
                    e.target.style.borderBottom = 'none';  // Remove underline
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

