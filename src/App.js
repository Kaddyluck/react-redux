import React, { Component } from 'react';
import './App.css';
import { logo } from './img/index.js'
import ProductForm from './components/ProductForm.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: []
    }
  }

  addProductInList = (joinedProduct) => {
    this.setState(prevState => ({
      productsList: [...prevState.productsList, joinedProduct]
    }))
    console.log(this.state.productsList);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ProductForm addProduct={this.addProductInList}/>
      </div>
    );
  }
}

export default App;
