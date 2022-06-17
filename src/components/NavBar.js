import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
// import { NavLink } from 'react-router-dom';

import Logo from "../images/ah-logo-white.svg";
import PersonIcon from '@mui/icons-material/Person';
import DevicesIcon from '@mui/icons-material/Devices';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';



function NavBar() {


  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}


  return (
    <nav className='NavBar'>
        {/* <NavHashLink smooth to='#top'>
        <img
            src={Logo}
            className="nav-logo"
            alt="Logo"
            /></NavHashLink>
         */}
        <ul>
            <li>
                <NavHashLink smooth to="/#about-section">
                <PersonIcon />
                </NavHashLink>
            </li>
            <li>
                <NavHashLink smooth to="/#projects-section">
                <DevicesIcon />
                </NavHashLink>
            </li>
            <li>
                <NavHashLink smooth to="/#contact-section">
            <AlternateEmailIcon />
            </NavHashLink>
            </li>
            {/* <li><NavHashLink to="/project">Ind.Project</NavHashLink></li> */}
        </ul>
        <p>&copy; 2022 Adam H.</p>
    </nav>

  )
}

export default NavBar