import React, { useState } from 'react';
import axios from 'axios';
import { MdCopyright, MdMarkEmailUnread } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      const response = await axios.post('https://api.web3forms.com/submit', {
        access_key: '9bb9a123-0e6a-4a04-9cfc-07cfecb77018',
        ...formData,
      });

      if (response.status === 200) {
        setSuccess(true);
        setFormData({ name: '', email: '', mobileNumber: '', message: '' });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
   <section className='contant--main--section' id="ContactMe">
     <div className='contact--footer'>
        <h1>My Contant </h1>
      <footer>
        <p className="footer-item">
                    <MdMarkEmailUnread size={30} color="blue" /> sahibjot.benipal2003@gmail.com
                  </p>
                  <p className="footer-item">
                    <BsFillTelephoneFill size={30} color="red" /> +91 7626846237
                  </p>
           <div className='icons'> 
             <FaInstagram/>
             <FaFacebook/>
             <FaLinkedin/>
            
            </div>  
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.146838895912!2d76.32896274270948!3d30.6181174138816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39101964d676ee53%3A0xbac404fc1c285036!2sWajira%20Bad%2C%20Punjab%20147301!5e0!3m2!1sen!2sin!4v1737644417944!5m2!1sen!2sin" width="200" height="200"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
           <div className="footer-bottom">
           <hr />
                   <p>Made with 💖 by Sahib</p>
                   <p>
                     <MdCopyright size={15} /> copyright @sahib 2025
                   </p>
                 </div>     
                
      </footer>
     </div>
     <div className="contact-me" >
      <h2>Get in touch</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Submit'}
        </button>

        {success && <p className="success-message">Message sent successfully!</p>}
        {error && <p className="error-message">Failed to send the message. Please try again later.</p>}
      </form>
    </div>
   </section>
  );
};

export default ContactMe;
