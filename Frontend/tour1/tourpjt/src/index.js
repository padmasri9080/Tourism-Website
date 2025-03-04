import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles for the app
import App from './App'; // Importing the App component
import reportWebVitals from './reportWebVitals'; // For performance monitoring
import { BrowserRouter } from 'react-router-dom'; // Router for navigation

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrapping App component with BrowserRouter in index.js is unnecessary since it's already in App.js.
// Removing the BrowserRouter here and keeping it in App.js.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
