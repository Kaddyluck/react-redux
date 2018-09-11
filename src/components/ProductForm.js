import React, { Component } from 'react';
import { shoppingCart, apple, vegetables, cupcake, fish } from '../img/index'

class ProductForm extends Component {
  state = {
    productName: '',
    productPrice: 0,
    productQuantity: 1,
    productImage: shoppingCart,
    showMenu: false,
    logoArray: [apple, vegetables, fish, cupcake]
  }

  changeProductProperty = event => this.setState({[event.target.name]: event.target.value})

  reduceProductsAmount = () => {
    if (this.state.productQuantity > 1) {
      this.setState({productQuantity: this.state.productQuantity - 1})
    }
  }

  increaseProductsAmount = () => this.setState({productQuantity: this.state.productQuantity + 1})

  showMenu = (event) => {
    event.preventDefault();
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  Logos = () => {return(
    this.state.logoArray.map((item, i) =>
      <button className="Product-button" key={i}>
        <img src={item} className="Product-logo" name={item.toString()} onClick={this.setImage} alt={item.toString()}/>
      </button>
    ))
  }

  setImage = (event) => {
    event.preventDefault();
    this.setState({
      productImage: event.target.name,
      showMenu: !this.state.showMenu
    })
  }

  createProductItem = () => {
    let joinedProduct = {
      name: this.state.productName,
      price: this.state.productPrice,
      count: this.state.productQuantity,
      logo: this.state.productImage
    }
    this.props.addProduct(joinedProduct)
    this.props.itemPrice(this.state.productPrice * this.state.productQuantity)
  }

  render() {
    return (
      <div className="Product-Form">
        <h1>Add product to your cart list</h1>

        <div>
          <input type="text" name="productName" placeholder="Product name" onChange={this.changeProductProperty}/>
          <input type="number" name="productPrice" placeholder="Product price" onChange={this.changeProductProperty}/>
        </div>

        <div className="Counter">
          <button className="Counter-button" onClick={this.reduceProductsAmount}>-</button>
          {this.state.productQuantity}
          <button className="Counter-button" onClick={this.increaseProductsAmount}>+</button>
        </div>

        <div className="Logo-block">
          <div>
            <button className="Product-button" onClick={this.showMenu}>
              <img src={this.state.productImage} className="Product-logo" name="shoppingCart" alt="Product logo"/>
            </button>
          </div>

          { this.state.showMenu ? (
            <div className="Available-logos">
              <this.Logos />
            </div>
          ) : null }
        </div>

        <div>
          <button
            className="Add-to-list-button"
            disabled={!this.state.productName || !this.state.productPrice}
            onClick={this.createProductItem}
          >
          Add to list
          </button>
        </div>
      </div>
    )
  }
}

export default ProductForm;
