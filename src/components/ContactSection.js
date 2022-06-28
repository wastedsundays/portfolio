import React from 'react'
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function ContactSection() {
  return (
    <section className='contact-section' id='contact'>

        <h2>Get in touch</h2>
        <div className='contact-box'>
          <p>ad.hauck@gmail.com</p>
          {/* <button className='link-button' onClick={() =>  navigator.clipboard.writeText('ad.hauck@gmail.com')}>
            Copy
          </button> */}
          <div>
            <a href="https://github.com/wastedsundays" target="_blank" rel="noreferrer">
              <FaGithubSquare />
            </a>
            <a href="https://www.linkedin.com/in/adamhauck1/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
    </section>
  )
}

export default ContactSection