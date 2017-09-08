import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from "./components/header";
import {Home } from "./components/home";
import {Main} from './components/main';
import {Sale} from "./components/sale";



export class App extends React.Component {
  render() {
    return (
      <div className="App">
             <div className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <Header/>
             </div>
             <br></br>
             <br></br>
             <br></br>
             <Main/>
            </div>

    );
  }
}

export default App;
