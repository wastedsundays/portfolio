import React from 'react'

import HeroImage from '../images/adam-profile-pic.jpg';

function HomeSection() {
  return (
    <section className='home-section' id='home'>
        <div className='heroinfo'>        
          <h1>Adam H</h1>
          <p className='subheading'>Front End Web Developer</p>
          <p>A bunch of text goes here. Currently it's just filling space. Ideally, Something incredibly intelligent would go here. But, uh....</p>
        </div>

        <figure className='heroimage'>
          <img src={HeroImage} alt="Black and White of Adam"/>
        </figure>

    </section>
  )
}

export default HomeSection