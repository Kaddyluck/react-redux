import React, { Component } from 'react';
import './App.css';
import { logo } from './img/index'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import ProductItem from './components/ProductItem'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: [],
      totalPrice: 0
    }
  }

  addProductInList = (joinedProduct) => {
    this.setState(prevState => ({
      productsList: [...prevState.productsList, joinedProduct]
    }))
  }

  calcTotalPrice = (itemPrice) => {
    this.setState(prevState => ({
      totalPrice: prevState.totalPrice + itemPrice
    }))
  }

  deleteItem = (index) => {
    this.setState(prevState => ({
      productsList: this.state.productsList.filter((_, i) => i !== index),
      totalPrice: prevState.totalPrice - this.state.productsList[index].price * this.state.productsList[index].count
    }))
  }

  reduceItem = (index) => {
    this.setState(prevState => {
      const updatedItem = {...prevState.productsList[index], count: prevState.productsList[index].count -= 1 }
      const updatedList = prevState.productsList;
      updatedList[index] = updatedItem;
      return {
        productsList: updatedList,
        totalPrice: prevState.totalPrice - Number(this.state.productsList[index].price)
      }
    })
  }

 increaseItem = (index) => {
   this.setState(prevState => {
     const updatedItem = {...prevState.productsList[index], count: prevState.productsList[index].count += 1 }
     const updatedList = prevState.productsList;
     updatedList[index] = updatedItem;
     return {
       productsList: updatedList,
       totalPrice: prevState.totalPrice + Number(this.state.productsList[index].price)
     }
   })
 }

  renderProductList = () => {return(
     <ProductList
       productsList={this.state.productsList}
       totalPrice={this.state.totalPrice}
       deleteItemHandler={this.deleteItem}
       reduceItemHandler={this.reduceItem}
       increaseItemHandler={this.increaseItem}
     />
   )}

   renderProductItem = ({match}) => {return(
     <ProductItem
       productItem={this.state.productsList[match.params.id]}
     />
   )}

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <ProductForm
            addProduct={this.addProductInList}
            itemPrice={this.calcTotalPrice}
          />

          <Route exact path='/' component={this.renderProductList}/>
          <Route exact path='/product/:id' component={this.renderProductItem}/>
        </div>
    </Router>
    );
  }
}

export default App;
