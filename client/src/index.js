import React from 'react';  // Ensure this is at the top
import ReactDOM from 'react-dom/client';  // Ensure this is at the top
import { BrowserRouter } from 'react-router-dom';  // Ensure this is at the top
import App from './App';  // Ensure this is at the top
import './index.css';  // Ensure this is at the top

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
