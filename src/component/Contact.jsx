import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_f255tvg', // Replace with your EmailJS Service ID
        'template_o1s5ut2', // Replace with your EmailJS Template ID
        form.current,
        'KvQfpmHqSsCPJNd_j' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(33, 33, 33, 0.8))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: '#fff',
        padding: '50px 0',
      }}
    >
      <div className="container">
        <div className="row justify-content-center d-flex align-items-stretch">
          {/* Left Box: Contact Form */}
          <div className="col-md-5 mb-4">
            <div
              className="border border-light p-5 rounded"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                height: '100%',
              }}
            >
              <h1 className="text-center mb-4 text-white">Get in Touch</h1>

              {/* Contact Form */}
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white">
                    Name
                  </label>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-white">
                    Email
                  </label>
                  <input type="email" name="email" className="form-control" id="email" placeholder="Your Email" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Right Box: Contact Information */}
          <div className="col-md-5 mb-4">
            <div
              className="border border-light p-5 rounded"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                height: '100%',
              }}
            >
              <h4 className="text-white">Contact Information</h4>
              <div className="d-flex align-items-center pt-3">
                <FaEnvelope size={20} className="me-2" />
                <p className="mb-0">
                  <strong>Email:</strong> krishna.more8200@gmail.com
                </p>
              </div>
              <div className="d-flex align-items-center pt-3">
                <FaPhone size={20} className="me-2" />
                <p className="mb-0">
                  <strong>Phone:</strong> +91 8200640037
                </p>
              </div>
              <div className="d-flex align-items-center pt-3">
                <FaMapMarkerAlt size={20} className="me-2" />
                <p className="mb-0">
                  <strong>Location:</strong> Ahmedabad, India
                </p>
              </div>

              <h4 className="text-white mt-5">Connect with Me</h4>
              <p>
                <a href="https://www.linkedin.com/in/krishnamore19/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} className="me-3" />
                </a>
                <a href="https://github.com/KrishnaMore19" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} className="me-3" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={30} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
