import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './pages/Home';
import AboutUsPage from './pages/AboutusPage';
import ServicesPage from './pages/ServicesPage';
import Contactus from './pages/Contactus';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Dynamic from './pages/Dynamic';


function App() {
  return (
      <div className="container-fluid">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/dynamic" element={<Dynamic />} />
        </Routes>
      </div>
      );
}

export default App;
