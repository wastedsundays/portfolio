import React from 'react'

import HeroImage from '../images/drawing-ah.jpg';

function HomeSection() {
  return (
    <section className='home-section' id='home'>
        <h1>Adam H</h1>
        <p>Front End Web Developer</p>
        <img src={HeroImage} alt="Black and White of Adam"/>
        <p>Ipsume Dipsum Tripsum</p>
    </section>
  )
}

export default HomeSection