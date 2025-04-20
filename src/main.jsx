import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Budget from './Budget.jsx';
import Login from './Login.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />           {/* Home screen */}
        <Route path="/budget" element={<Budget />} />  {/* Budget screen */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
