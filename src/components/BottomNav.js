import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';

// import Logo from "../images/ah-logo-white.svg";
import RestoreIcon from '@mui/icons-material/Restore';
import PersonIcon from '@mui/icons-material/Person';
import DevicesIcon from '@mui/icons-material/Devices';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';



function BottomNav() {
    const [hash, setHash] = useState('')
    const updateHash = () => {
      setHash(window.location.hash)
    }
      return (
    <nav className="bottom-nav">
        <ul>
          <li>
            <NavHashLink smooth to="#top" >
              <PersonIcon />
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