//import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';
import { budget } from './util/helper.js';

let month = "April";

function App() {
  const navigate = useNavigate();
  
  return (
    <>
      <header>
        <nav>
          <h1>Finance Tracker</h1>
          <ul>
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/budget')}>Budget</li>
            <li>Statistics</li>
          </ul>
        </nav>
      </header>
      <div id='body'>
        <div id="budget">
          <h3>{month}</h3>
          <h4>Remaining Budget:</h4>
          <h5>{budget}</h5>
        </div>
      </div>
    </>
  )
}

export default App
