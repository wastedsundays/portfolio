import React from 'react'
import { NavLink } from 'react-router-dom';
import  Record  from '../images/404record.gif';

function Page404() {
  return (
    <div className="error-message">
      <h1>:(</h1>
      <p>You look lost...</p>
      <div> 
        <img
                src={Record}
                className="nav-logo"
                alt="Logo"
                />
      </div>
      <NavLink to={"/"}>
        <button className="link-button">Home</button>
      </NavLink>
    </div>
  )
}

export default Page404