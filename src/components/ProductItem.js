import React, { Component } from 'react';
import { trash, link } from '../img/index'
import { Link } from 'react-router-dom'

const ProductItem = props => (
    <div className="Product-Preview">
      <h1>{props.productItem.name}</h1>
      <img src={props.productItem.logo} className="Product-Preview-logo" alt="Product logo"/>
      <h3>Count: {props.productItem.count}</h3>
      <h3>Price: {props.productItem.price} $</h3>
      <h3>Total: {props.productItem.price * props.productItem.count} $</h3>
      <Link to='/'>
        <button className="Action-button">Back to list</button>
      </Link>
    </div>
  )

export default ProductItem;
