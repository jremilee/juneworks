import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  const isMiaiPage = pathname === "/miai";
  const isCreativePage = pathname === "/creativeworks";
  const isSharpPage = pathname === "/sharp";
  const isThirstyLionPage = pathname === "/thirstylion2";

  return (
    <header
      className={`nav${isMiaiPage ? " nav--miai" : ""}${isCreativePage ? " nav--creative" : ""}${isSharpPage ? " nav--sharp" : ""}${isThirstyLionPage ? " nav--thirsty" : ""}`}
    >
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
