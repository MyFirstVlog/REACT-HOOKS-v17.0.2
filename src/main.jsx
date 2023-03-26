import React from 'react';
import ReactDOM from 'react-dom';
import { Memorize } from './06-memos/Memorize';
// import { Layout } from './04-useLayoutEffect/Layout';
// import { MultipleCustomHooks } from './examples/MultipleCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { HooksApp } from './HooksApp';
// import { FocusScreen } from './useRef/FocusScreen';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Memorize/>
  </React.StrictMode>,
  document.getElementById('root')
);