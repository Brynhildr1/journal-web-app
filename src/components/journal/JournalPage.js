// JournalPage.js
import React, { useState } from 'react';
import JournalEntryList from './JournalEntryList';
import '../../styles/journal.css';

const JournalPage = () => {
  const [entries, setEntries] = useState([]);

  const handleSaveEntry = (title, content) => {
    const newEntry = {
      id: Date.now(),
      title,
      content,
      timestamp: new Date().toLocaleString(),
    };

    setEntries([...entries, newEntry]);
  };

  return (
    <div>
      <h2>Make a new journal entry</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" rows={10}></textarea>
      </div>
      <button onClick={handleSaveEntry}>Save Entry</button>
      <JournalEntryList entries={entries} />
    </div>
  );
};

export default JournalPage;
