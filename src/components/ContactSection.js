import React from 'react'
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function ContactSection() {
  return (
    <section className='contact-section' id='contact'>
        <h2>Contact Me</h2>
        <p>email ad.hauck@gmail.com</p>
        <button onClick={() =>  navigator.clipboard.writeText('ad.hauck@gmail.com')}>
          Copy
        </button>
        <div>
          <FaGithubSquare />
          <FaLinkedin />
        </div>
    </section>
  )
}

export default ContactSection