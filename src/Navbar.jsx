import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#333" }}>
      <NavLink to="/" style={linkStyle} activeStyle={activeLinkStyle}>
        Hide Components
      </NavLink>

      <NavLink to="/input-components" style={linkStyle} activeStyle={activeLinkStyle}>
        Input Components
      </NavLink>

      <NavLink to="/edit-node" style={linkStyle} activeStyle={activeLinkStyle}>
        Edit Node
      </NavLink>
    </nav>
  );
};

const linkStyle = { marginRight: "15px", color: "white", textDecoration: "none" };
const activeLinkStyle = { fontWeight: "bold", color: "yellow" };

export default Navbar;
