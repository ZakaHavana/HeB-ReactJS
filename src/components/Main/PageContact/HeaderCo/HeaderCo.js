import React, { Component } from 'react';
// import Button from '../../../UI/Button/Button';
import classes from './HeaderCo.module.css';
import ContactForm from './ContactForm';

class HeaderCo extends Component {

    render() {


        return (
            <div>
                <div className={classes.DivSlika}>
                    <div className={classes.TextSlika} >
                        CONTACT
                        <hr />
                    </div>
                </div>
                <ContactForm />    
            </div>
        )
    }
}

export default HeaderCo;