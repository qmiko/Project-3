import React, { Component } from "react";
import Shop from "./components/Shop.js";
import Sell from "./components/Sell.js";
import Search from "./components/Search.js"
import "./App.css";


class Nav extends Component{
  render(){
    return (
      <div className="nav">
        <div className="header">eleven</div>
        <div className="nav-child" onClick={this.props.showShop}>shop</div>
        <div className="nav-child" onClick={this.props.showSell}>sell</div>
      </div>
    )
  }
}

class App extends Component {

  state = {
    currentPage:"shop"
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
  showSellPage = () =>{
    this.setState({currentPage: 'sell'})
  }

  render() {
    return (
      <div className="App">
       <Nav showSell={this.showSellPage} showShop={this.showShopPage}/>
       {this.getPageContents()}
      </div>
    );
  }
}

export default App;
