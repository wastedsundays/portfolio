import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import SmallLogo from '../images/ah-logo-blue.svg';


function HeaderBar() {
  return (
    <>
      <div className="headerbar">
      <NavHashLink to="/#top">
        <img
          src={SmallLogo}
          className="small-nav-logo"
          alt="AH Logo small version"
        />
        </NavHashLink>
      </div>
    </>
  )
}

export default HeaderBar