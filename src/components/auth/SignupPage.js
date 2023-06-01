import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/auth.css'; // Import the CSS file for authentication pages

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Perform signup logic here
    // ...
    // Redirect to the home page
    navigate('/home');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Sign Up</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button onClick={handleSignup}>Sign Up</button>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

