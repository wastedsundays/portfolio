import React from 'react'
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';
import { FaCopy } from 'react-icons/fa';




function ContactSection() {


  return (
    <section className='contact-section' id='contact'>

        <h2>Get in touch</h2>
        <div className='contact-box'>
        <div>
            <a href="https://github.com/wastedsundays" target="_blank" rel="noreferrer">
              <FaGithubSquare />
            </a>
            <a href="https://www.linkedin.com/in/adamhauck1/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <p>ad.hauck@gmail.com</p>
            <FaCopy onClick={() =>  {
            navigator.clipboard.writeText('ad.hauck@gmail.com');
            alert('Email address copied to clipboard');
            }}/>
          <a href="mailto:ad.hauck@gmail.com?subject='Han%20Shot%20First'">         
            <ImMail />
          </a>

        </div>
    </section>
  )
}

export default ContactSection