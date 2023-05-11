import React from 'react';
import ReactDOM from 'react-dom';
import { TodoApp } from './08-useReducer/TodoApp';
import './index.css';
import { Provider } from 'react-redux';
import {createStore } from 'redux';
import { todosReducerInStore } from './08-useReducer/todoReducer';
import { UppyComponent } from './uppy/uppy';


// import { store } from './08-useReducer/store/store';
// import { Padre } from './07-tarea-memo/Padre';
// import { CallbackHook } from '.x/06-memos/CallbackHook';
// import { MemoHook } from './06-memos/MemoHook';
// import { Memorize } from './06-memos/Memorize';
// import { Layout } from './04-useLayoutEffect/Layout';
// import { MultipleCustomHooks } from './examples/MultipleCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { HooksApp } from './HooksApp';
// import { FocusScreen } from './useRef/FocusScreen';
// import './08-useReducer/intro-reducer'
// import { MainApp } from './09-useContext/MainApp';
// import { AboutPage } from './09-useContext/AboutPage';
// import { LoginPage } from './09-useContext/LoginPage';
// import { HomePage } from './09-useContext/HomePage';
// import { BrowserRouter } from 'react-router-dom';
// import { getRoutes } from './09-useContext/routes/routes';
// const router = getRoutes()


const store = createStore(todosReducerInStore);

ReactDOM.render(
  // <Provider  store={store}>
  //   <TodoApp/>
  // </Provider>
  <React.StrictMode>
  <UppyComponent />
</React.StrictMode>
,
    document.getElementById('root')
);