// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Introduction from './Components/Introduction';
import PhotoGallery from './Components/PhotoGallery';
import ContactForm from './Components/ContactForm';
// import './App.css';
import './Styles.css';

function App() {
  return (
    <Router>
      <Navbar />
	  <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
    </Router>
  );
}

export default App;
