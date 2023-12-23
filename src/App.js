import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/App.css';

// pages & components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          
          <Routes>
            <Route path="/" exact element={<Home />} />
            {/* <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} /> */}
          </Routes>

          <Footer />
      </div>
    </Router>
  );
}

export default App;
