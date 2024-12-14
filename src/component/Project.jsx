import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import images correctly
import weatherImage from '../assets/image/weather.png';
import newsImage from '../assets/image/news.png';
import cryptoImage from '../assets/image/Cr.png'; // Import the crypto project image

function Project() {
  const projectData = [
    {
      title: 'Weather App',
      description: 'A simple weather app that provides weather forecasts using a public API.',
      technologies: ['React', 'API', 'CSS'],
      liveDemo: 'https://weather-app-eight-delta-10.vercel.app/',
      github: 'https://github.com/KrishnaMore19/Projects/tree/main/Weather%20apps',
      screenshot: weatherImage, // Use the imported image here
    },
    {
      title: 'News App',
      description: 'A news app that fetches real-time news articles from an API.',
      technologies: ['React', 'API', 'Bootstrap'],
      liveDemo: 'https://newsapp.example.com',
      github: 'https://github.com/KrishnaMore19/Projects/tree/main/NewsApp',
      screenshot: newsImage, // Use the imported image here
    },
    {
      title: 'Crypto App',
      description: 'A cryptocurrency tracking app that provides real-time data using the CoinGecko API.',
      technologies: ['React', 'Redux Toolkit', 'Tailwind CSS', 'CoinGecko API'],
      liveDemo: 'https://crypto-six-self.vercel.app/', // Replace with your actual live demo link
      github: 'https://github.com/KrishnaMore19/travel-app', // Replace with your actual GitHub link
      screenshot: cryptoImage, // Use the imported image here
    },
  ];

  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(33, 33, 33, 0.8))',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          color: '#d4d4dc',
          padding: '50px 0',
        }}
      >
        <div className="container mt-5">
          <h2 className="text-center mb-4">My Projects</h2>
          <div className="row">
            {projectData.map((project, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div
                  className="card shadow-lg p-3 mb-5 rounded"
                  style={{
                    backgroundColor: '#333', // Dark background for card
                    color: '#ffffff',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effect
                  }}
                >
                  <div className="card-img-container" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <img
                      src={project.screenshot}
                      alt={project.title}
                      className="card-img-top"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        objectFit: 'cover', // Ensure the image covers the container space
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <p>
                      <strong>Technologies:</strong> {project.technologies.join(', ')}
                    </p>
                    <div className="d-flex justify-content-between">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Live Demo <FaExternalLinkAlt />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark"
                      >
                        GitHub <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
        .card:hover {
          transform: scale(1.05); /* Slight zoom effect */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Soft shadow on hover */
        }

        .card-img-top {
          transition: transform 0.3s ease;
        }

        .card-img-top:hover {
          transform: scale(1.1); /* Zoom effect on hover */
        }
        `}
      </style>
    </div>
  );
}

export default Project;

