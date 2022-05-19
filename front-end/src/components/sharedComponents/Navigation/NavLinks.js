import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>
          НАЧАЛО
        </NavLink>
      </li>
      <li>
        <NavLink to='/u1/places'>MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to='/demo'>Demo1</NavLink>
      </li>
      <li>
        <NavLink to='/Login'>ВХОД</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
