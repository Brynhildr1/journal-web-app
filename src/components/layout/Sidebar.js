// Sidebar.js
import React from 'react';
import JournalEntryList from '../journal/JournalEntryList';
import './styles/layout.css';

const Sidebar = ({ entries }) => {
  return (
    <div className="sidebar">
      <h2>Previous Journal Entries</h2>
      <JournalEntryList entries={entries} />
      <button>View All</button>
    </div>
  );
};

export default Sidebar;
