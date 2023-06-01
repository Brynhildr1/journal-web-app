// JournalEntry.js
import React from 'react';
import '../../styles/journal.css';

const JournalEntry = ({ title, content, timestamp }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{timestamp}</p>
      <hr />
    </div>
  );
};

export default JournalEntry;
