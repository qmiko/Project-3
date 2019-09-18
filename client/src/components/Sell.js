import React, { Component } from "react";




class Sell extends Component {

    state = {
        title: "",
        description: "",
        price: ""
    };

    handleInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    submitForm = event => {
        alert(this.state.description + "Submitted")
        //API.saveItem(this.state)
    };

    render() {
        return (
            <div className="sell-items">
                <div>
                <input
                    className="title"
                    value={this.state.title}
                    name="title"
                    onChange={this.handleInput}
                    type="text"
                    placeholder="Entry Title" />
                <input
                    className="price"
                    value={this.state.price}
                    name="price"
                    onChange={this.handleInput}
                    type="text"
                    placeholder="USD" />
                    </div>
                <textarea
                    className="description"
                    value={this.state.description}
                    name="description"
                    onChange={this.handleInput}
                    type="text"
                    placeholder="description" />
                <div className="new-item" onClick={this.submitForm}> add new item</div>

            </div>



        )
    }

}

export default Sell;