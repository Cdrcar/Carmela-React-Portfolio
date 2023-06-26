import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id= "contact">
      <h5>Ask me any question</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        {/* Contact Options */}
        <div className="contact__options">

          <article className='contact__option'>
            <a href="mailto:carmela881@outlook.com" target='_blank' rel='noreferrer'><AiOutlineMail/></a>
            <h5>carmela881@outlook.com</h5>
          </article>

          <article className='contact__option'>
            <a href="https://www.linkedin.com/in/carmelarey/" target='_blank' rel='noreferrer'><BsLinkedin/></a>
            <h5>/carmelarey</h5>
          </article>
        </div>

         {/* Contact Form */}
         <form action="">
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="text" name='email' placeholder='Email' required />
          <textarea name="message"  rows="10" placeholder='Message...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
         </form>
      </div>

    </section >
  )
}

export default Contact
