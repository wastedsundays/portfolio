import React from 'react';
import Logo from '../images/ah-logo-blue.svg';


function HeaderBar() {
  return (
    <>
      <div className="headerbar">
        <a href="#top">
        <img
          src={Logo}
          className="small-nav-logo"
          alt="AH Logo small version"
        />
        </a>
      </div>
    </>
  )
}

export default HeaderBar