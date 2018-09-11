import React, { Component } from 'react';
import { trash, link } from '../img/index.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  reduceProductsAmount = (index) => () => {
    if (this.props.productsList[index].count > 1) {
      this.props.reduceItemHandler(index)
    }
  }

  increaseProductsAmount = (index) => () => {
    this.props.increaseItemHandler(index)
  }

  deleteItem = (index) => () => {
    this.props.deleteItemHandler(index)
  }

  productItem = () => {
    return(
    this.props.productsList.length > 0 ? (
      this.props.productsList.map((item, i) =>
        <div className="Product-Item" key={i}>

          <div className="Item-name-and-actions">
            <div className="Item-name">
              {item.name}
            </div>
            <div className="Item-actions">
              <img src={trash} className="Delete-logo" onClick={this.deleteItem(i)}/>
              <Link to={`/product/${i}`}>
                <img src={link} className="Link-logo"/>
              </Link>
            </div>
          </div>

          <div className="Item-logo-and-counter">
            <div className="Item-logo-section">
              <img src={item.logo} className="Item-logo"/>
            </div>
            <div>
              <button className="Counter-button" onClick={this.reduceProductsAmount(i)}>-</button>
              {item.count}
              <button className="Counter-button" onClick={this.increaseProductsAmount(i)}>+</button>
            </div>
          </div>

          <div className="Item-price">
            Total: {item.count * item.price} $
          </div>
        </div>
      )) : null
    )}

  render() {
    return (
      <div className="Product-List">
        <h1>Product list</h1>

        <div className="All-Items">
          <this.productItem />
          <div className="Total">
            Total: {this.props.totalPrice} $
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
