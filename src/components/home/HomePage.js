import React, { useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Sidebar from '../layout/Sidebar';
import '../../styles/shared.css';
import '../../styles/home.css';

const HomePage = () => {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() !== '' && content.trim() !== '') {
      const newEntry = {
        id: Date.now(),
        title: title,
        content: content,
        timestamp: new Date().toLocaleString(),
      };
      setEntries([...entries, newEntry]);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="home-page">
      <Header />
      <div className="content-container">
        <Sidebar entries={entries} />
        <div className="main-content">
          <h2>Make a New Journal Entry</h2>
          <div className="input-section">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="input-section">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              required
            ></textarea>
          </div>
          <div className="button-section">
            <button
              type="submit"
              className="save-button"
              onClick={handleSubmit}
            >
              Save Entry
            </button>
            <div className="timestamp">{new Date().toLocaleString()}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
