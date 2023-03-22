import React from 'react';
import ReactDOM from 'react-dom';
import { MultipleCustomHooks } from './examples/MultipleCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { HooksApp } from './HooksApp';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <MultipleCustomHooks/>
  </React.StrictMode>,
  document.getElementById('root')
);