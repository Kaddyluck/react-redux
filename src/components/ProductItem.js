import React, { Component } from 'react';
import { trash, link } from '../img/index'
import {Link} from 'react-router-dom'

class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Product-Preview">
        {console.log(this.props.productItem)}
        <h1>{this.props.productItem.name}</h1>
        <img src={this.props.productItem.logo} className="Product-Preview-logo" alt="Product logo"/>
        <h3>Count: {this.props.productItem.count}</h3>
        <h3>Price: {this.props.productItem.price} $</h3>
        <h3>Total: {this.props.productItem.price * this.props.productItem.count} $</h3>
        <Link to='/'><button className="Product-Preview-home-button">Back to list</button></Link>
      </div>
    )
  }
}

export default ProductItem;
