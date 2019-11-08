import React, {Component} from 'react';
import classes from './App.module.css'
import HomePage from './Homepage/HomePage';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import ProductPage from './ProductPage/ProductPage';
import Cart from './CartPage/Cart'
import ConfirmPage from './ConfirmPage/ConfirmPage';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
class App extends Component {

  state={
    products:[],
    counterOfProducts:0,
    counter:0
  }

  btnClick = (p) => {
    var val = this.state.products
    var counterOfProducts = this.state.counterOfProducts
    var counter = this.state.counter
    for(var i = 0; i < val.length; i++){
      if(val[i]['id'] === p.id){
         val[i].count += 1
         counter++
        this.setState({products:val,counter})
        return
      }
    }
    counter++
    counterOfProducts++
    let obj={
          "id":p.id,
          "title":p.name,
          "thumbnail": p.preview,
          "amount": p.price,
          "count": counterOfProducts,
    }
    val.push(obj) 
    this.setState({products:val,counter})
}

clearCart = () => {
  this.setState({products:[],
    counterOfProducts:0,
    counter:0})
}
  render(){
  return (
   <BrowserRouter> 
    <div className={classes.App}>
      <Navbar counter={this.state.counter}/>
     <Switch>
     <Route exact path="/" component={HomePage}/>
  <Route path="/cart" render={(props) => <Cart {...props} clearCart={this.clearCart} products={this.state.products}/>}/>  
      <Route path="/product/:productId"
       render={(props) =>
        <ProductPage {...props} 
        products={this.state.products}
        btnClick={this.btnClick}
        counter={this.state.counter}/>
      }
        />
    <Route Path="/confirm" component={ConfirmPage}/>
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter> 
  );
  }
}

export default App;
