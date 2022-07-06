import React from 'react'
import { NavLink } from 'react-router-dom';

function Page404() {
  return (
    <div className="error-message">
      <h1>:(</h1>
      <p>You look lost...</p>
      <NavLink to={"/"}>
        <button className="link-button">Home</button>
      </NavLink>
    </div>
  )
}

export default Page404