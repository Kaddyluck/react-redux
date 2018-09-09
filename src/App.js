import React, { Component } from 'react';
import './App.css';
import { logo } from './img/index.js'
import ProductForm from './components/ProductForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ProductForm/>
      </div>
    );
  }
}

export default App;
