import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import classes from './ContactForm.module.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_71t8ntf', 'template_dsenrnh', form.current, '3jQ1yHm8Fc5AAkib9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert('The message has been sent !')
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={classes.Form}>
      <input type="text" placeholder="Name" name="name" />
      <input type="text" placeholder="Subject" name="subject" />
      <input type="email" placeholder="Email" name="email" />
      <textarea name="message" placeholder="Message" rows="5" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;
