import React, { Component } from "react";
import API from "./api/api"
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
        // this.getItems();
    }
    getItems = () => {
        API.getItems().then(res =>
            this.setState({
                items: res.data.item
            })
        )

    }

    render() {
        return <div className="clothing-item">
            <button className="clothing-item-btn" onClick={this.getItems}>shop new items</button>
            {this.state.items.length ?
                this.state.items.map(item => (
                    <ClothingItem
                        title={item.title}
                    />
                )) : ""}


        </div>
    }

}

function ClothingItem(props) {
    return <div className="clothing-item">{props.title}</div>
}
class Shop extends Component {

    state = { menuOpen: true }

    render() {
        return (
            <div>
                {this.state.menuOpen ? <Menu /> : ""}
                <Clothes />
            </div>

        )
    }

}

export default Shop;