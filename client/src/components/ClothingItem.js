import React from "react";
import api from "./api/api.js";

class ClothingItem extends React.Component {
    state={
        img:""
    }
    componentDidMount = () => {
        const app = this;
        api.getImage(this.props.title).then( (response) =>{

            var reader = new window.FileReader();
            reader.readAsDataURL(response.data);
            reader.onload = function () {

                var imageDataUrl = reader.result;
                // console.log('image data:', imageDataUrl)
                app.setState({'img':imageDataUrl})

            }
        })
    }
    render() {
        return <div className="clothing-item">
            <img alt="clothing" src={this.state.img} />

            {this.props.title}

        </div>
    }
    
}

export default ClothingItem;