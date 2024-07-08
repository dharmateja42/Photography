
import React from 'react';
//import sty from '.';
import '../style/Contactform.css'
function ContactForm() {
  return (
    <div className="contact-form">
      <form className="contact-form__form">
        <div className="contact-form__head">
          <h1 className="contact-form__title">Contact Form</h1>
          <p className="contact-form__description">Please fill all the texts in the fields</p>
        </div>
        <label htmlFor="fullName" className="contact-form__label">Your Name:</label>
        <input type="text" placeholder="Full Name" name="fullName" id="fullName" className="contact-form__input" />

        <label htmlFor="email" className="contact-form__label">Your Email:</label>
        <input type="email" placeholder="abcd@xyz.com" name="email" id="email" className="contact-form__input" required />

        <label htmlFor="subject" className="contact-form__label">Subject:</label>
        <input type="text" placeholder="Job Enquiry" name="subject" id="subject" className="contact-form__input" required />
      
        <label htmlFor="message" className="contact-form__label">Message:</label>
        <textarea placeholder="Your Message Here" name="message" id="message" className="contact-form__textarea" required></textarea>
        <button type="submit" className="contact-form__button">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
