import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import image from '../assets/image/image.png'; // Correct path to your image
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        height: '100vh', // Full viewport height
        color: '#fff', // White text color
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(33, 33, 33, 0.8))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Image of yourself */}
          <div className="col-md-6">
            <img
              src={image}
              alt="Krishna More"
              className="img-fluid rounded-circle mb-4"
              style={{
                width: '300px', // Image size
                height: '300px', // Ensure it stays circular
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Text content */}
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">Hi, I'm Krishna More</h1>
            <h2 className="lead">A Web Developer Specializing in Modern Web Technologies</h2>
            <p className="mt-3">I create beautiful, responsive, and high-performing websites to bring your ideas to life.</p>
            <Link to="/projects" className="btn btn-primary mt-4 me-2">View My Work</Link>
            <Link to="/contact" className="btn btn-outline-light mt-4">Contact Me</Link>

            {/* Social Media Icons with Bootstrap Hover Effect */}
            <div className="social-icons mt-4">
              <a
                href="https://www.instagram.com/krishnamore1908/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3 fs-1 d-inline-block hover-underline-animation"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/krishnamore19/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3 fs-1 d-inline-block hover-underline-animation"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/KrishnaMore19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-1 d-inline-block hover-underline-animation"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
