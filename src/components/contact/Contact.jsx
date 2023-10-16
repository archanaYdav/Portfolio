import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
import {MdOutlineMailOutline} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";

function Contact(props) {

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dq5tcwm', 'template_4144r8v', form.current, 'mli3vma7JMaep2P1E')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
      };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineMailOutline className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>archna20001@gmail.com</h5>
                        <a href='mailto:archna20001@gmail.com'>Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+91 8595124653</h5>
                        <a href='https://api.whatsapp.com/send?phone=+243411234434' target="_blank">Send a Message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}> 
                    <input type='text' name='name' placeholder='Your Full Name' required/>
                    <input type='email' name='email' placeholder='Your Email' required/>
                    <textarea name='message' id='' cols="30" rows="10" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary' >Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;