import React, { Component } from 'react';
// import Button from '../../../UI/Button/Button';
import classes from './HeaderCo.module.css';
import axios from './form-axios';
import Input from './inputCo/inputCo';

class HeaderCo extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                validation: {
                    required: true
                },
                valid: false,
                value: '',
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail'
                },
                validation: {
                    required: true
                },
                valid: false,
                value: '',
                touched: false

            },
            comment: {
                elementType: 'textarea',
                elementConfig: {
                    type: null,
                    placeholder: 'Your Question/Comment'
                },
                validation: {
                    required: true
                },
                valid: false,
                value: '',
                touched: false
            }
        }
    }

    orderHandler = (event) => {

        event.preventDefault();

        const formData = {};

        for (let formElement in this.state.orderForm) {
            formData[formElement] = this.state.orderForm[formElement].value
        };

        const finalData = formData


        axios.post('/details.json', finalData)
            .then(response => {
                // console.log(response)
                
                alert('Your question has been sent!')

                // finalData = '';
            })
            .catch(error => console.log(error));


    }

    checkValidity(value, rules) {
        let isValid = false;

        if (rules.required) {
            isValid = value !== ''
        }

        return isValid;
    }

    inputChangedHandler(event, identifier) {

        const updatedOrderForm = {
            ...this.state.orderForm
        }

        const updatedElement = {
            ...updatedOrderForm[identifier]
        }


        updatedElement.value = event.target.value;
        updatedOrderForm[identifier] = updatedElement;

        updatedElement.valid = this.checkValidity(updatedElement.value, updatedElement.validation)
        updatedElement.touched = true;

        let formIsValid = true;

        for (let updatedElement in updatedOrderForm) {
            formIsValid = updatedOrderForm[updatedElement].valid && formIsValid;
        }

        // console.log(updatedElement)

        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid })
    }



    render() {

        const orderFormArray = [];
        for (let key in this.state.orderForm) {
            orderFormArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        return (
            <div>
                <div className={classes.DivSlika}>
                    <div className={classes.TextSlika} >
                        CONTACT
                <hr />
                    </div>
                </div>
                <form onSubmit={this.orderHandler}>
                    {orderFormArray.map(inputElement => (
                        <Input
                            key={inputElement.id}
                            elementType={inputElement.config.elementType}
                            elementConfig={inputElement.config.elementConfig}
                            value={inputElement.config.value}
                            changed={(event) => this.inputChangedHandler(event, inputElement.id)}
                            invalid={!inputElement.config.valid}
                            touched={inputElement.config.touched}
                        />

                    ))}

                    <button disabled={!this.state.formIsValid}>Send !</button>
                </form>

            </div>
        )
    }



    // state = {
    //     name: '',
    //     email: '',
    //     question: ''
    // };

    // handleNameChange = (event) => {
    //     this.setState({ name: event.target.value })
    // } 

    // handleEmailChange = (event) => {
    //     this.setState({ email: event.target.value })
    // }

    // handleQuestionChange = (event) => {
    //     this.setState({ question: event.target.value })
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();

    //     const filledEmail = {
    //         name: this.state.name,
    //         email: this.state.email,
    //         question: this.state.question
    //     };

    //     axios.post('/details.json', filledEmail)
    //         .then(response => console.log(response))
    //         .catch(error => console.log(error));

    //     alert("Your question has been sent ! :) ")

    //     this.setState({name: ''})
    //     this.setState({email: ''})
    //     this.setState({question: ''})
    // }



    // render() {
    //     return(
    //         <div>
    //         <div className={classes.DivSlika}>
    //             <div className={classes.TextSlika} >
    //                 CONTACT
    //             <hr />
    //             </div>
    //         </div>


    //         <form>
    //             <div>
    //                 <input 
    //                 type="text" 
    //                 name="name" 
    //                 id="name" 
    //                 placeholder="Full Name" 
    //                 onChange={this.handleNameChange}
    //                 value={this.state.name}
    //                 // required
    //                  />
    //             </div>
    //             <div>
    //                 <input 
    //                 type="email" 
    //                 name="email" 
    //                 id="email" 
    //                 placeholder="Email address" 
    //                 // required
    //                 onChange={this.handleEmailChange}
    //                 value={this.state.email}
    //                 />
    //             </div>
    //             <div>
    //                 <textarea 
    //                 rows="8" 
    //                 placeholder="Question us! ;)" 
    //                 onChange={this.handleQuestionChange}
    //                 value={this.state.question}
    //                 />
    //             </div>
    //             <div>
    //                 <Button onClick={this.handleSubmit}>Send !</Button>
    //             </div>
    //         </form>
    //     </div>
    //     )
    // }
}

export default HeaderCo;