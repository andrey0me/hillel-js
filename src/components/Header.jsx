import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">Booking</NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Main</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/hotels">Hotels</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
