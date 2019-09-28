import React, { Component } from "react";
import API from "./api/api"
class Login extends Component {

    state = {
        username: "",
        email: "",
        password: "",
    };

    handleInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFileInput = event => {
        this.setState({ uploaded: event.target.files[0], loaded: 0 })

    };

    submitForm = event => {
        API.saveUser({
            username: this.state.username || "none",
            email: this.state.email || "none",
            password: this.state.password || "none"
        })
        this.setState({ stage: 1 });
    };

    fileSubmit = event => {
        let data = new FormData();
        data.append('file', this.state.uploaded);
    };

    render() {
        return (
            <div className="user-login">
                {/* <button className="create-user"> create profile </button>
                <button className="login"> login </button> */}
                {/* how to make .then for user login */}
                <input
                    className="username"
                    value={this.state.username}
                    name="username"
                    onChange={this.handleInput}
                    type="text"
                    placeholder=" username" />
                <input
                    className="email"
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInput}
                    type="text"
                    placeholder=" email" />
                <input
                    className="password"
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInput}
                    type="password"
                    placeholder=" password" />


            </div>
        )
    };
}

export default Login;