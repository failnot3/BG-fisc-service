import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";

const NavLinks = (props) => {
  const [selected, setSelected] = React.useState(false);
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>
          НАЧАЛО
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin'>Администрация</NavLink>
      </li>
      <li>
        <ToggleButton
          value='check'
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <CheckIcon />
        </ToggleButton>
      </li>
    </ul>
  );
};

export default NavLinks;
