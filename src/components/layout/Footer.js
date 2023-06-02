import React from 'react';
import '../../styles/layout.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Journal App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
