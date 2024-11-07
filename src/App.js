import React from 'react';
import CardList from './CardList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Developer Cards App</h1>
      <p>To add your details, please submit a PR with your information in the <code>developers.json</code> file.</p>
      <CardList />
    </div>
  );
}

export default App;