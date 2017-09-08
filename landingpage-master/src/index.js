import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import { App } from './App';


//import { Data } from "./components/data";
//import home from "./components/home";

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

