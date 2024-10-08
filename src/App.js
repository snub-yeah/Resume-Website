import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home.js';
import AboutMe from './routes/AboutMe.js';
import Experience from './routes/Experience.js';
import Contact from './routes/Contact.js';
import MBison from './routes/MBison.js';
import './App.css';

function App() {
  return (
    <Router basename="/Resume-Website">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/MBison" element={<MBison />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;