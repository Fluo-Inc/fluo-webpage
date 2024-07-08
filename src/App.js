import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/App.css';

// pages & components
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Technology from './pages/Technology';
import Request from './pages/Request';
import Detection from './pages/Detection';
import Analytics from './pages/Analytics';
import TermOfUse from './pages/TermOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="App">
          <ScrollToTop />
          <Navbar />
          <div className="app-body">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/team"  element={<Team />} />
              <Route path="/technology"  element={<Technology />} />
              <Route path="/book-demo"  element={<Request />} />
              <Route path="/platform/detection"  element={<Detection />} />
              <Route path="/platform/analytics"  element={<Analytics />} />
              <Route path="/terms-of-use"  element={<TermOfUse />} />
              <Route path="/privacy-policy"  element={<PrivacyPolicy />} />
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
      </div>
    </Router>
  );
}

export default App;
