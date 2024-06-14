import React from 'react';
import './Home.css';

export default function Home({ onStart }) {
  return (
    <div className="home-container">
      <button className="start-button" onClick={onStart}>
        Customize your Porsche
      </button>
    </div>
  );
}
