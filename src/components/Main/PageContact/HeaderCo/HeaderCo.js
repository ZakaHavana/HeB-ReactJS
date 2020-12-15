import React, { Component } from 'react';
import Button from '../../../UI/Button/Button';
import classes from './HeaderCo.module.css';
import axios from './form-axios';

class HeaderCo extends Component {

    state = {
        name: '',
        email: '',
        question: ''
    };

    handleNameChange = (event) => {
        this.setState({ name: event.target.value })
    } 

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    handleQuestionChange = (event) => {
        this.setState({ question: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const filledEmail = {
            name: this.state.name,
            email: this.state.email,
            question: this.state.question
        };

        axios.post('/details.json', filledEmail)
            .then(response => console.log(response))
            .catch(error => console.log(error));

        alert("Your question has been sent ! :) ")

        this.setState({name: ''})
        this.setState({email: ''})
        this.setState({question: ''})
    }

   

    render() {
        return(
            <div>
            <div className={classes.DivSlika}>
                <div className={classes.TextSlika} >
                    CONTACT
                <hr />
                </div>
            </div>
            <form>
                <div>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Full Name" 
                    onChange={this.handleNameChange}
                    value={this.state.name}
                    // required
                     />
                </div>
                <div>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email address" 
                    // required
                    onChange={this.handleEmailChange}
                    value={this.state.email}
                    />
                </div>
                <div>
                    <textarea 
                    rows="8" 
                    placeholder="Question us! ;)" 
                    onChange={this.handleQuestionChange}
                    value={this.state.question}
                    // required 
                    />
                </div>
                <div>
                    {/* <input type="submit" name="submit" id="submit" /> */}
                    <Button onClick={this.handleSubmit}>Send !</Button>
                </div>
            </form>
        </div>
        )
    }
}

export default HeaderCo;