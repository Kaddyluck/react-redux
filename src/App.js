import React, { Component } from 'react';
import logo from './img/logo.svg';
import shoppingCart from './img/shoppingCart.svg';
import apple from './img/apple.svg';
import vegetables from './img/vegetables.svg';
import cupcake from './img/cupcake.svg';
import fish from './img/fish.svg';
import './App.css';

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

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productPrice: 0,
      productQuantity: 1,
      productImage: shoppingCart,
      showMenu: false,
      logoArray: [apple, vegetables, fish, cupcake],
      productsList: []
    }
    this.changeProductProperty = this.changeProductProperty.bind(this);
    this.changeProductsNumber = this.changeProductsNumber.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.setImage = this.setImage.bind(this);
    this.addProductInList = this.addProductInList.bind(this);
  }

  changeProductProperty(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  changeProductsNumber(event) {
    if (event.target.name === "minus" && this.state.productQuantity > 1) {
      this.setState({productQuantity: this.state.productQuantity - 1})
    } else if (event.target.name === "plus") {
      this.setState({productQuantity: this.state.productQuantity + 1})
    }
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  setImage(event) {
    event.preventDefault();
    this.setState({
      productImage: event.target.name,
      showMenu: !this.state.showMenu
    })
  }

  addProductInList() {
    var joinedProduct = this.state.productsList.concat({
      name: this.state.productName,
      price: this.state.productPrice,
      count: this.state.productQuantity,
      logo: this.state.productImage
    })
    this.setState({productsList:joinedProduct})
  }

  render() {
    return (
      <div className="Product-Form">
        <h1>Add product to your cart list</h1>

        <div className="Product-name-and-price-input">
          <input type="text" name="productName" placeholder="Product name" onChange={this.changeProductProperty}/>
          <input type="number" name="productPrice" placeholder="Product price" onChange={this.changeProductProperty}/>
        </div>

        <div className="Counter">
          <button name="minus" className="Counter-button" onClick={this.changeProductsNumber}>-</button>
          {this.state.productQuantity}
          <button name="plus" className="Counter-button" onClick={this.changeProductsNumber}>+</button>
        </div>

        <div className="Logo-block">
          <div>
            <button className="Product-button" onClick={this.showMenu}>
              <img src={this.state.productImage} className="Product-logo" name="shoppingCart" alt="Product logo"/>
            </button>
          </div>

          { this.state.showMenu ? (
            <div className="Available-logos">
              {this.state.logoArray.map((item, i) =>
                <button className="Product-button" key={i}>
                  <img src={item} className="Product-logo" name={item.toString()} onClick={this.setImage} alt={item.toString()}/>
                </button>
              )}
            </div>
          ) : null }
        </div>

        <div>
          <button className="Add-to-list-button" disabled={
            !this.state.productName && !this.state.productPrice} onClick={this.addProductInList}>
          Add to list
          </button>
        </div>

      </div>
    )
  }
}

export default App;
