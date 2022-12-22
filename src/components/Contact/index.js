import React, {useRef} from 'react'
import './index.css'
import { MdEmail } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_efp9ycj', 'template_ajh2mi1', form.current, 'N2gloNLBFoyZ_rLO3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section>
      <h5>Get in touch</h5>
      <h2>Contact me!</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>andresbueno043@gmail.com</h5>
            <a href="mailto:andresbueno043@gmail.com" target='_blank'>
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+57 314 862 6878</h5>
            <a href="https://wa.link/varybb" target='_blank'>
              Get in touch!
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Let's talk!</button>
        </form>
      </div>

    </section>
  )
}

export default Contact