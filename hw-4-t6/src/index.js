import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const workers  = [
    { name: "Ivan", lastname: "Ivanov", days: 22, stake: 1500 },
    { name: "Petr", lastname: "Petrov", days: 21, stake: 1600 },
    { name: "Ivan", lastname: "Sidorov", days: 20, stake: 1400 },
    { name: "Sidor", lastname: "Kuznetsov", days: 24, stake: 1770 },
    { name: "Vasiliy", lastname: "Pupkin", days: 23, stake: 1600 },
    { name: "Valeriy", lastname: "Makarov", days: 22, stake: 1200 },
  ]

ReactDOM.render(
  <React.StrictMode>
    <App workers={workers}/>
  </React.StrictMode>,
  document.getElementById('root')
);

