import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

import Logo from '../images/ah-logo-white.svg';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DevicesIcon from '@mui/icons-material/Devices';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function NavBar() {

  return (
    <nav className='navbar'>
        <NavHashLink smooth to='/#top'>
            <img
                src={Logo}
                className="nav-logo"
                alt="Logo"
                />
        </NavHashLink>
   
        <ul>
            <li>
                <NavHashLink smooth to="/#top" >
                    <div className="nav-button">
                        <HomeIcon />
                        <p>Home</p>
                    </div>

                </NavHashLink>
            </li>
            <li>
                <NavHashLink smooth to='/#about'>
                    <div className="nav-button">
                        <PersonIcon />
                        <p>About</p>
                    </div>
                </NavHashLink>
            </li>
            <li>
                <NavHashLink smooth to='/#projects'>
                    <div className="nav-button">
                        <DevicesIcon />
                        <p>Projects</p>
                    </div>
                </NavHashLink>
            </li>
            <li>
                <NavHashLink smooth to='/#contact'>
                    <div className="nav-button">
                        <AlternateEmailIcon />
                        <p>Contact</p>
                    </div>
                </NavHashLink>
            </li>
        </ul>
        <div className="navbar-text">
            <p>&copy; 2022 Adam H.</p>
        </div>   
    </nav>
  )
}

export default NavBar