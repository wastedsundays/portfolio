import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';

import Logo from "../images/ah-logo-white.svg";
import PersonIcon from '@mui/icons-material/Person';
import DevicesIcon from '@mui/icons-material/Devices';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function NavBar() {
  return (
    <div className='NavBar'>
        <NavHashLink smooth to='#top'>
          <img
            src={Logo}
            className="nav-logo"
            alt="Logo"/>
        </NavHashLink>
        <ul>
            <li>
                <NavHashLink smooth to='/#about'>
                    <PersonIcon />
                </NavHashLink>
            </li>
            <li>
                <NavHashLink smooth to='/#projects'>
                    <DevicesIcon />
                </NavHashLink>
            </li>
            <li>
                <NavHashLink smooth to='/#contact'>
                    <AlternateEmailIcon />
                </NavHashLink>
            </li>
        </ul>
        {/* 
            <li>
                <NavHashLink to="/project">
                    Ind.Project
                </NavHashLink>
            </li> 
        */}
    </div>

  )
}

export default NavBar