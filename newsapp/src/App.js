import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// rcc for class based component
export default class App extends Component {
   // api key: 4ff2463b1f2e4aaab5e02572ed29df5c
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

