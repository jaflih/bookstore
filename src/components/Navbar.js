import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navBar">
      <ul className="links">
        <li>
          <NavLink to="/" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
