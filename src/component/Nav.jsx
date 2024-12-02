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
        background: '#222',
      }}
    >
      <div className="container">
        {/* Text Logo */}
        <Link
          className="navbar-brand"
          to="/"
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
          style={{
            border: 'none',
          }}
        >
          <span
            className="navbar-toggler-icon"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.8%29%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e")',
              backgroundSize: 'contain',
              width: '30px',
              height: '30px',
            }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Link to each page */}
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li className="nav-item" key={item}>
                <Link
                  className="nav-link"
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  style={{
                    color: '#b3cde3',
                    position: 'relative',
                    padding: '0 8px',
                    transition: 'color 0.3s ease, border-bottom 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#00FFFF';
                    e.target.style.borderBottom = '2px solid #00FFFF';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = '#b3cde3';
                    e.target.style.borderBottom = 'none';
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
