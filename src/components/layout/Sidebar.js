import React from 'react';
import JournalEntry from '../journal/JournalEntry';
import '../../styles/journal.css';

const Sidebar = ({ entries }) => {
  return (
    <div className="sidebar">
      <h2>Saved Entries</h2>
      <div className="journal-entry-list">
        {entries.map((entry) => (
          <JournalEntry
            key={entry.id}
            title={entry.title}
            content={entry.content}
            timestamp={entry.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
