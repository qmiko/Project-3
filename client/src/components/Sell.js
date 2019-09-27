import React, { Component } from "react";
import API from "./api/api.js";
import api from "./api/api.js";




class Sell extends Component {

    state = {
        title: "",
        description: "",
        price: "",
        stage: 0
    };

    handleInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFileInput = event => {
        console.log(event.target.files[0]);
        this.setState({uploaded: event.target.files[0], loaded:0})

    }

    submitForm = event => {
        API.saveItem({
            title: this.state.title || "none",
            description: this.state.description || "none",
            price: parseFloat(this.state.price) || 999.99
        })
        this.setState({ stage: 1 });
    };

    fileSubmit = event =>{
        console.log('file upload clicked')
        let data = new FormData();
        data.append('file', this.state.uploaded);
        console.log(this.state.uploaded, " sent to api");
        api.imageUpload(data, this.state.title + "." + this.state.uploaded.name.split('.').pop()).then( (res) => {
            console.log(res);
            this.setState({stage:0})
        })
        
    }

    render() {
        return (
            <div className="sell-items">
                {this.state.stage === 0 ?
                    <div>
                        <div>
                            <input
                                className="title"
                                value={this.state.title}
                                name="title"
                                onChange={this.handleInput}
                                type="text"
                                placeholder=" title" />
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
                    :
                    //image upload html goes here
                    <div>
                        <div>
                         <input type="file" name="file" onChange={this.handleFileInput}/>
                         <button onClick={this.fileSubmit}>Upload</button>
                        </div>
                    </div>

                }
            </div>



        )
    }

}

export default Sell;