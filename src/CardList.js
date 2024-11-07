import React from 'react';
import developers from './developers.json';
import './index.css';
import './App.css';

function CardList() {
  return (
    <div className="card-list">
      {developers.map((developer, index) => (
        <div key={index} className="card">
          <h2>{developer.name}</h2>
          <p>{developer.language}</p>
		  <p>{developer.funFact}</p>
		  <p>{developer.superpower}</p>
        </div>
      ))}
    </div>
  );
}

export default CardList;