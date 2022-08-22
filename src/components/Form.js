import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }
    }
    handleChange(event) {
        event.preventDefault();
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({firstName: event.target.firstName});
        this.setState({lastName: event.target.lastName});
        this.setState({email: event.target.firstName});
        this.setState({password: event.target.firstName});
        
        console.log(this);

    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                        <input type="text" value={this.state.value} name="firstName" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Last Name:
                        <input type="text" value={this.state.value} name="lastName" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Email Address:
                        <input type="email" value={this.state.value} name="email" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" value={this.state.value} name="password" onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <h2>{this.state.firstName}</h2>
                <h2>{this.state.lastName}</h2>
                <h2>{this.state.email}</h2>
                <h2>{this.state.password}</h2>
            </>
        )
    }
}
