import React from 'react';
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"

function App() {
  return (
    <HashRouter>  
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
