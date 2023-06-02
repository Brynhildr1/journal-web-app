import React from 'react';
import '../../styles/layout.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Journal</div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/" className="profile">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
