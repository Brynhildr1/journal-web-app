// TextArea.js
import React from 'react';
import '../../styles/shared.css';

const TextArea = ({ value, onChange }) => {
  return <textarea value={value} onChange={onChange} />;
};

export default TextArea;
