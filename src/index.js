import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { createStore, applyMiddleware } from 'redux'; //change to configureStore
import { Provider } from 'react-redux';
// const store = createStore(rootReducer) //configureStore (new way uses create store but has some good preconfigured options)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <App />
    </React.StrictMode>
 
);


