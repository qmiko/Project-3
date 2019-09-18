import React, { Component } from "react";
import Shop from "./components/Shop.js";
import Sell from "./components/Sell.js";
import "./App.css";


class Nav extends Component{
  render(){
    return (
      <div><button onClick={this.props.showShop}>Shop</button></div>
    )
  }
}

class App extends Component {

  state = {
    currentPage:"sell"
  }

  getPageContents = () => {
    switch(this.state.currentPage){
      case 'shop':
        return  <Shop/>
      case 'sell':
        return  <Sell/>
    }
  }

  showShopPage = () => {
    this.setState({currentPage:'shop'});
  }

  render() {
    return (
      <div className="App">
       <Nav showSell={} showShop={this.showShopPage}/>
       {this.getPageContents()}
      </div>
    );
  }
}

export default App;
