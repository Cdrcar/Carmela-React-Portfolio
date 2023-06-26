import React, { useRef } from 'react'; //{useRef} imported from emailjs
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {

  // Function to link emailjs to react so I receive the emails from the form to my gmail
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_61prx0e', 'template_elcxqrr', form.current, 'g3MBooUuQT15jv5c2') // Extrated my service id, my template id and public key from emailjs
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset(); // To clean the form once the user clicks on submit
  };

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

         {/* Contact Form and in the ref use the variable from that contains the useRef()*/}
         <form ref={form} onSubmit={sendEmail}>
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
