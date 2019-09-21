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
        <div className="nav-child" onClick={this.props.showSearch}>search</div>
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
      case 'search':
        return <Search/>
    }
  }

  showShopPage = () => {
    this.setState({currentPage:'shop'});
  }
  showSellPage = () =>{
    this.setState({currentPage: 'sell'})
  }
  showSearchPage = () =>{
    this.setState({currentPage: 'search'})
  }

  render() {
    return (
      <div className="App">
       <Nav showSell={this.showSellPage} showShop={this.showShopPage} showSearch={this.showSearchPage}/>
       {this.getPageContents()}
      </div>
    );
  }
}

export default App;
