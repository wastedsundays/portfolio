import React from 'react';
import { NavHashLink } from 'react-router-hash-link';


import Logo from '../images/ah-logo-white.svg';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DevicesIcon from '@mui/icons-material/Devices';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';





function NavBar() {


//   const scrollWithOffset = (el) => {
//     const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
//     const yOffset = -80; 
//     window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
// }


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
                <HomeIcon />
                </NavHashLink>
            </li>
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
            {/* <li><NavHashLink to="/project">Ind.Project</NavHashLink></li> */}
        </ul>
        <p>&copy; 2022 Adam H.</p>
    </nav>

  )
}

export default NavBar