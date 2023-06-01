import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import ResetPasswordPage from './components/auth/ResetPasswordPage';
import HomePage from './components/home/HomePage';
import AboutPage from './components/home/AboutPage';
import ContactPage from './components/home/ContactPage';
import ProfilePage from './components/home/ProfilePage';
import JournalPage from './components/journal/JournalPage';
import LandingPage from './components/landing/LandingPage';
import './styles/app.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
