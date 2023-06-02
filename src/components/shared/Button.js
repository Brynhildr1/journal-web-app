// Button.js
import React from 'react';
import '../../styles/shared.css';

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
