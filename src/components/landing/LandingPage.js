// LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/landing.css';

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1>Journal Web App</h1>
        <p>Record your thoughts and experiences in a personal journal.</p>
        <div className="button-group">
        <Link to="/login" className="btn btn-secondary">Log In</Link>
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;