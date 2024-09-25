// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DatePickerWithRecurrence from './components/DatePickerWithRecurrence';

// Make sure you target the correct element in the HTML file
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <DatePickerWithRecurrence />
  </React.StrictMode>
);
