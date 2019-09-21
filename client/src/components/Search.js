import React, { Component } from "react";
import API from "./api/api";
import axios from "axios";


class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            query: '',
            results:{},
            loading: false,
            message: ''
        }
        this.cancel = "";
    }

    fetchSearchResults = (query) =>{
        // if(this.cancel){
        //     this.cancel.cancel();
        // }
        // this.cancel = axios.CancelToken.source();
        // axios.get(seacrhURL, {
        //     cancelToken: this.cancel.token
        // }).then(res =>{
        //     const resultNotFound
        // })

        API.getItems().then(function(data){
            console.log(data);
        })

    };

    handleOnInputChange = (event) =>{
        const query=event.target.value;
        this.setState({query, loading:true, message:""});
    };

    render(){
        const {query} = this.state;
        console.log(this.state)
        return(
            <div className="search-component">
               <h2 className="heading">Live Search</h2>
               <label className="search-label" htmlFor="search-input">
                   <input
                   type="text"
                   name="query"
                   value={query}
                   id="search-input"
                   placeholder="search"
                   onChange={this.handleOnInputChange}
                   />
                   <i onClick={this.fetchSearchResults} className="fa fa-search" aria-hidden="true"/>
               </label>
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