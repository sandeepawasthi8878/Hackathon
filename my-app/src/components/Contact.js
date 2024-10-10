import React from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="contact-container">
      <h3 className="contact-header">
        If you have any questions or inquiries about Hackathon 2024, feel free to get in touch with us. We're here to help!
      </h3>
      <div className="contact-info">
        <div className="contact-method">
          <h3>Email</h3>
          <p>info@hackathon2024.com</p>
        </div>
        <div className="contact-method">
          <h3>Phone</h3>
          <p>9400998877, 9455664433</p>
        </div>
        <div className="contact-method">
          <h3>Social Media</h3>
          <p>Follow us on <a href="https://twitter.com/hackathon2024">Twitter</a> and <a href="https://www.facebook.com/hackathon2024">Facebook</a> for updates!</p>
        </div>
      </div>
      <div className="info-box">
        <h3>Additional Information</h3>
        <span className="spn">For more details, please reach out to us or visit our social media platforms.</span>
      </div>
      <div className="button" onClick={() => navigate('/')}>
        Go To Home
      </div>
    </div>
  );
}

export default Contact;
