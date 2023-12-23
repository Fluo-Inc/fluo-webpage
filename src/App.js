import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/App.css';

// pages & components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Technology from './pages/Technology';


function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/team"  element={<Team />} />
            <Route path="/technology"  element={<Technology />} />
          </Routes>

          <Footer />
      </div>
    </Router>
  );
}

export default App;
