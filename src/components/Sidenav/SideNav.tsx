// home-app/src/components/Sidenav/SideNav.tsx
import React from "react";
import { NavLink } from "react-router-dom";

const SideNav: React.FC = () => {
  return (
    <nav style={{ width: "200px", background: "#93c5fd", padding: "20px" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "#1e3a8a" }}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/template"
            style={{ textDecoration: "none", color: "#1e3a8a" }}
          >
            Template
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
