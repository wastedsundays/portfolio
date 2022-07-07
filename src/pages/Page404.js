import React from 'react'
import { NavLink } from 'react-router-dom';
import  Record  from '../images/404record.gif';

function Page404() {
  return (
    <div className="error-message">
      <h1>Lost?</h1>
      <div> 
        <img
                src={Record}
                className="fourohfour-gif"
                alt="Spinning record with AH and 404 on the label"
                />
      </div>
      <NavLink to={"/"}>
        <button className="link-button">Home</button>
      </NavLink>
    </div>
  )
}

export default Page404