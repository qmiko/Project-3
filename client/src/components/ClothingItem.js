import React from "react";
import api from "./api/api.js";
import $ from "jquery";

class ClothingItem extends React.Component {
    state = {
        img: ""
    }
    componentDidMount = () => {
        const app = this;
        api.getImage(this.props.title).then((response) => {

            var reader = new window.FileReader();
            reader.readAsDataURL(response.data);
            reader.onload = function () {

                var imageDataUrl = reader.result;
                // console.log('image data:', imageDataUrl)
                app.setState({ 'img': imageDataUrl })

            }
        })
    }
    mouseEnterHandler = (e) => {
        $('.visible').removeClass('visible')
        $(e.target).find('h2').addClass('visible')
    }
    mouseLeaveHandler = (e) => {
        $('.visible').removeClass('visible')
    }
    render() {
        return <div className="clothing-item">

            <img alt="clothing" src={this.state.img} />
            <div className="scrim" onMouseEnter={this.mouseEnterHandler} onMouseLeave={this.mouseLeaveHandler}>
                <h2>{this.props.title}</h2>
            </div>



        </div>
    }

}

export default ClothingItem;