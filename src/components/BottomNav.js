import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';

// import Logo from "../images/ah-logo-white.svg";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DevicesIcon from '@mui/icons-material/Devices';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';



function BottomNav() {

      return (
    <nav className="bottom-nav">
        <ul>
          <li>
            <NavHashLink smooth to="#top" >
              <HomeIcon />
              <p>Home</p>
            </NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="/#about" >
              <PersonIcon />
              <p>About</p>
            </NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="/#projects" >
              <DevicesIcon />
              <p>Projects</p>
            </NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="/#contact" >
              <AlternateEmailIcon />
              <p>Contact</p>
            </NavHashLink>
          </li>
        </ul>

    </nav>
    
      );
    }

export default BottomNav