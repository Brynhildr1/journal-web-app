// JournalEntryList.js
import React from 'react';
import JournalEntry from './JournalEntry';
import '../../styles/journal.css';

const JournalEntryList = ({ entries }) => {
  return (
    <div>
      {entries.map((entry) => (
        <JournalEntry
          key={entry.id}
          title={entry.title}
          content={entry.content}
          timestamp={entry.timestamp}
        />
      ))}
    </div>
  );
};

export default JournalEntryList;
