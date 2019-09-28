import React, { Component } from "react";
import Shop from "./components/Shop.js";
import Sell from "./components/Sell.js";
import Search from "./components/Search.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import "./App.css";


class Nav extends Component{
  render(){
    return (
      <div className="nav">
        <div className="header" onClick={this.props.showHome}>eleven</div>
        <div className="nav-child" style={this.props.currentPage === "shop" ? {"fontWeight":"bold"} : {}} onClick={this.props.showShop}>shop</div>
        <div className="nav-child" style={this.props.currentPage === "sell" ? {"fontWeight":"bold"} : {}} onClick={this.props.showSell}>sell</div>
        <div className="nav-child" style={this.props.currentPage === "search" ? {"fontWeight":"bold"} : {}} onClick={this.props.showSearch}>search</div>
        <div className="nav-child-login" style={this.props.currentPage === "login" ? {"fontWeight":"bold"} : {}} onClick={this.props.showLogin}>login</div>
      </div>
    )
  }
}

class App extends Component {

  state = {
    currentPage:"home"
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
      case 'login':
        return <Login/>
      default: 

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
  showLoginPage = () =>{
    this.setState({currentPage: 'login'})
  }


  render() {
    return (
      <div className="App">
       <Nav currentPage={this.state.currentPage} showSell={this.showSellPage} showShop={this.showShopPage} showSearch={this.showSearchPage} showHome={this.showHomePage} 
       showLogin={this.showLoginPage}/>
       {this.getPageContents()}
      </div>
    );
  }
}

export default App;
