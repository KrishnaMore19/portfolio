import React from 'react';
import image from '../assets/image/image.png';
import HTML from '../assets/image/html.png';
import CSS from '../assets/image/css.png';
import javascript from '../assets/image/javascript.png';
import mongodb from '../assets/image/mongodb.png';
import c from '../assets/image/c.png';
import sql from '../assets/image/mysql.png';
import react from '../assets/image/react.png';
import Tailwind from '../assets/image/Tailwind CSS.png';

function About() {
  const skills = [
    { src: HTML, name: "HTML 5" },
    { src: CSS, name: "CSS 3" },
    { src: javascript, name: "JavaScript" },
    { src: react, name: "React" },
    { src: mongodb, name: "MongoDB", size: '60%' },
    { src: c, name: "C" },
    { src: sql, name: "MySQL", size: '60%' },
    { src: Tailwind, name: "Tailwind CSS" },
  ];

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
      <div className="container mt-5">
        {/* About Me Section */}
        <div className="row justify-content-between align-items-center mb-5">
          <div className="col-md-5 d-flex align-items-stretch">
            <div
              className="card shadow-lg flex-grow-1"
              style={{
                backgroundColor: '#333',
                color: '#fff',
                borderRadius: '10px',
                padding: '20px',
              }}
            >
              <div className="card-body">
                <h2 className="card-title text-center">About Me</h2>
                <p className="card-text text-center mt-3">
                  I'm a passionate web developer with a keen interest in building dynamic and responsive websites. I love the process of problem-solving and bringing creative solutions to life with the latest technologies.
                  <br /><br />
                  With experience in both front-end and back-end development, I aim to deliver seamless and intuitive user experiences. In my free time, I enjoy learning new programming languages, experimenting with new frameworks, and contributing to open-source projects.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-5 d-flex align-items-stretch">
            <div
              className="card shadow-lg flex-grow-1"
              style={{
                backgroundColor: '#333',
                color: '#fff',
                borderRadius: '10px',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <div className="card-body">
                <img
                  src={image}
                  alt="My Image"
                  className="img-fluid rounded-circle"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    maxHeight: '100%',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div
              className="card shadow-lg"
              style={{
                backgroundColor: '#333',
                color: '#fff',
                borderRadius: '10px',
                padding: '20px',
              }}
            >
              <div className="card-body">
                <h2 className="card-title text-center">My Skills</h2>
                <div className="d-flex flex-wrap justify-content-around mt-4">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="card m-3 shadow-sm bg-dark text-white d-flex justify-content-center align-items-center skill-card"
                      style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '10px',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                        e.currentTarget.style.boxShadow = "0 10px 20px rgba(255, 255, 255, 0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.3)";
                      }}
                    >
                      <img
                        src={skill.src}
                        alt={skill.name}
                        className="img-fluid"
                        style={{
                          width: skill.size || '50%', // Default size is 50%, larger for MongoDB/MySQL
                          height: 'auto',
                          marginBottom: '10px',
                        }}
                      />
                      <p className="card-text text-center">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
