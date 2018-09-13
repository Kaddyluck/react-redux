import React, { Component } from 'react';
import { trash, link } from '../img/index'
import { Counter } from './Counter'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class ProductList extends Component {
  reduceProductsAmount = index => () => {
    if (this.props.productsList[index].count > 1) {
      this.props.reduceItemHandler(index)
    }
  }

  increaseProductsAmount = index => () => this.props.increaseItemHandler(index)

  deleteItem = index => () => this.props.deleteItemHandler(index)

  showProduct = (item, i) => {
    return(
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

        <div className="Product-logo-and-counter">
          <div className="Product-logo-section">
            <img src={item.logo} className="Product-logo"/>
          </div>

          <Counter
            onSub={this.reduceProductsAmount(i)}
            onAdd={this.increaseProductsAmount(i)}
            counterValue={item.count}
          />
        </div>

        <div className="Item-price">
          Total: {item.count * item.price} $
        </div>
      </div>
    )
  }

  productItem = () => {
    return(
    this.props.productsList.length > 0 ? (
      this.props.productsList.map((item, i) => this.showProduct(item, i))
    ) : null
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
