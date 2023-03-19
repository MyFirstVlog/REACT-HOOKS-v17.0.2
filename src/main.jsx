import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CounterApp/>
  </React.StrictMode>,
  document.getElementById('root')
);