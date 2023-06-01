// LoginPage.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/auth.css'; // Import the CSS file for authentication pages

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // ...
    // Redirect to the home page
    navigate('/home');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
