import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './component/Home';
import About from './component/About';
import Projects from './component/Project';
import Contact from './component/Contact';

function App() {
  return (
    <Router>
      <div>
        <Nav /> {/* Navigation Component */}
        
        {/* Routes for each page */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* This should be '/' for the home route */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
