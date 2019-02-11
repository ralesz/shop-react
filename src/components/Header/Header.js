import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from './basket.png';

export const Header = props => {
  return (
    <div>
      <nav className="navLinks ">
        <div className="logo">
          NAZWA SKLEPU
        </div>
        
        <div className="links">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/faq" activeClassName="active">
            FAQ
          </NavLink>
          <NavLink exact to="/regulamin" activeClassName="active">
            Regulamin
          </NavLink>
          <NavLink exact to="/kontakt" activeClassName="active">
            Kontakt
          </NavLink>
          <NavLink exact to="/basket" activeClassName="active">
                <img src={logo} className="basket" alt="logo" />
          </NavLink>
          </div>
      </nav>
    </div>
  );
};

