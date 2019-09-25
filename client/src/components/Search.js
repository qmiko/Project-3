import React, { Component } from "react";
import API from "./api/api";
import axios from "axios";
import ClothingItem from "./ClothingItem";

class Results extends Component {
    render() {
        return <div className="clothing-item">
            {this.props.data.length ?
                this.props.data.filter(item => {
                    let display = false;
                    if(- 1 !== item.title.indexOf(this.props.query)) (display = true);
                    if(- 1 !== item.description.indexOf(this.props.query)) (display = true);
                    return display;
                }).map(item => (

                    <ClothingItem
                        title={item.title}
                    />
                )) : ""}
        </div>
    }
}

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: {},
            loading: false,
            message: '',
            data: {
                item: []
            }
        }
        this.cancel = "";
    }

    fetchSearchResults = (query) => {
        // if(this.cancel){
        //     this.cancel.cancel();
        // }
        // this.cancel = axios.CancelToken.source();
        // axios.get(seacrhURL, {
        //     cancelToken: this.cancel.token
        // }).then(res =>{
        //     const resultNotFound
        // })
        const app = this;
        API.getItems().then(function (data) {
            console.log(data);
            app.setState(data);
        })

    };

    handleOnInputChange = (event) => {
        const query = event.target.value;
        this.setState({ query, loading: true, message: "" });
    };

    render() {
        const { query } = this.state;
        console.log(this.state)
        return (
            <div className="search-component">
                <label className="search-label" htmlFor="search-input">
                    <input
                        className="search-box"
                        type="text"
                        name="query"
                        value={query}
                        id="search-input"
                        placeholder=" search"
                        onChange={this.handleOnInputChange}
                    />
                    <i onClick={this.fetchSearchResults} className="fa fa-search" aria-hidden="true" id="search-btn" />
                </label>
                <Results query={this.state.query} data={this.state.data.item} />
            </div>
        )
    }
}
//     state = {
//         query: '',
//         results: []
//     }
// }

// getInfo = () => {
//     axios.get()
//       .then(({ data }) => {
//         this.setState({
//           results: data.data
//         })
//       })
//   }

// handleInputChange = () => {
//     this.setState({
//         query: this.search.value
//     })
// }

// render() {
//     return (
//       <form>
//         <input
//           placeholder="search"
//           ref={input => this.search = input}
//           onChange={this.handleInputChange}
//         />
//         <p>{this.state.query}</p>
//       </form>
//     )
//   }
//  }

export default Search;