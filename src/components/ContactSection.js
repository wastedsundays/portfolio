import React from 'react'

function ContactSection() {
  return (
    <section className='contact-section' id='contact'>
        <h2>Contact Me</h2>
        <p>email ad.hauck@gmail.com</p>
        <button onClick={() =>  navigator.clipboard.writeText('ad.hauck@gmail.com')}>
          Copy
        </button>
    </section>
  )
}

export default ContactSection