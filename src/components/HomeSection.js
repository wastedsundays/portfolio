import React from 'react'

import HeroImage from '../images/adam-profile-pic.jpg';

function HomeSection() {
  return (
    <section className='home-section' id='home'>
        <h1>Adam H</h1>
        <p className='subheading'>Front End Web Developer</p>
        <figure>
          <img src={HeroImage} alt="Black and White of Adam"/>
        </figure>
        <p>Ipsume Dipsum Tripsum</p>
    </section>
  )
}

export default HomeSection