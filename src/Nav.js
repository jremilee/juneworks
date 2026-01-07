import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <nav className="nav__links" aria-label="Primary">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
          >
            About
          </NavLink>
        </nav>
      </div>
      <div className="nav__divider" />
    </header>
  );
}
