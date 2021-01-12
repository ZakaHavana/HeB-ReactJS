import React from 'react';
import classes from './inputCo.module.css';

const Input = (props) => {

    let inputElement = null;

    const inputElementClass = [classes.InputElement];

    if (props.invalid && props.touched) {
        inputElementClass.push(classes.Invalid)
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = (
                <input
                    className={inputElementClass.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        case ('textarea'):
            inputElement = (

                <textarea
                    rows="7"
                    className={inputElementClass.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
    }

    return (
        <div className={classes.Input}>
            <label >{props.label}</label>
            {inputElement}
        </div>
    )
};

export default Input;