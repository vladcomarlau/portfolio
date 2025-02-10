import React from 'react';
import './App.css';

function App() {
  const logo: string = require("./logo.svg").default;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Work in progress 🛝
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comarlau.com
        </a>
        <a>App 1</a>
      </header>
    </div>
  );
}

export default App;
