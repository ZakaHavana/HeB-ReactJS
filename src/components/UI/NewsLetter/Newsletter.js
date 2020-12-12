import React, { Component } from 'react';
import classes from './Newsletter.module.css';
import axios from './axios-emails';



class Newsletter extends Component {


    state = {
        email: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: event.target.value })
        console.log(this.state.email)

        const filledEmail = {
            email: this.state.email
        }
        axios.post('/emails.json', filledEmail)
            .then(response => console.log(response))
            .catch(error => console.log(error));

        alert("You subscribed to our newsletter!")
    }



    handleInputChange = (event) => {
        this.setState({ email: event.target.value })
    }
    render() {
        return (
            <div className={classes.Newsletter}>
                <div>Sign up for updates. Join HeB list!</div>
                <form>
                    <p>EMAIL ADDRESS:</p>
                    <input
                        onChange={this.handleInputChange}
                        type="text"
                        className="inp"
                        placeholder="your email address"
                        name="email"
                        value={this.state.email}
                    />
                    <input type="submit" className="sub_btn" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default Newsletter;