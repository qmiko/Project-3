import React, { Component } from "react";
import Shop from "./components/Shop.js";
import Sell from "./components/Sell.js";
import Search from "./components/Search.js"
import Home from "./components/Home.js"
import "./App.css";


class Nav extends Component{
  render(){
    return (
      <div className="nav">
        <div className="header" onClick={this.props.showHome}>eleven</div>
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
      case 'home':
        return <Home/>
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
  showHomePage = () =>{
    this.setState({currentPage: 'home'})
  }


  render() {
    return (
      <div className="App">
       <Nav showSell={this.showSellPage} showShop={this.showShopPage} showSearch={this.showSearchPage} showHome={this.showHomePage}/>
       {this.getPageContents()}
      </div>
    );
  }
}

export default App;
