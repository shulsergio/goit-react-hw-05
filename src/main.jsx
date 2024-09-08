import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.jsx';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)