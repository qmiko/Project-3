import React, { Component } from "react";
import API from "./api/api";
import ClothingItem from "./ClothingItem";
import Delete from "./Delete"


function Menu() {
    return <div>
        <ul className="clothing-menu">
            <li> all </li>
            <li> feminine </li>
            <li> masculine </li>
            <li> tops </li>
            <li> bottoms </li>
            <li> dresses / jumpsuits </li>
            <li> outerwear </li>
            <li> kicks </li>
        </ul>
    </div>
}

//make shit show up
class Clothes extends React.Component {
    state = {
        items:[]
    }

    componentDidMount(){
        this.getItems();
    }

    getItems = () => {
        API.getItems().then(res =>
           { 
            console.log(res.data);   
            this.setState({
                items: res.data
            })}
        )
    }
    
    getClothesJSX(){
        if(this.state.items.length){
            return this.state.items.map((item,i) => {
                return (
                <div className="clothing-item">
                    <ClothingItem
                        key={i}
                        title={item.title}
                    />
                    <Delete onClick={() => this.deleteItems()} />
                </div>)
            });
        }
        return false;
    }

    render() {
        return (
            <div className="clothes">
                {this.getClothesJSX()}
            </div>

        )
    }
}


class Shop extends Component {

    state = { menuOpen: false }

    toggleMenu = () => {
        this.setState({
            menuOpen: ! this.state.menuOpen
        })
    }
    render() {
        return (
            <div>
                {this.state.menuOpen ? <Menu toggleMenu={this.toggleMenu}/> : ""}
                <Clothes />
            </div>

        )
    }

}

export default Shop;