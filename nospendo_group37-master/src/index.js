import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import readModel from './js-folder/ReadModel.js'

const model = readModel();

ReactDOM.render(
  <React.StrictMode>
    <App model={model} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
