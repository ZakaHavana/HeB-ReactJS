import React from 'react';
import classes from './NavigationItem.module.css';
import { Link } from 'react-router-dom';

const NavigationItem = (props) => (

    <li className={classes.NavigationItem}>
        <Link to={props.link} onClick={props.clicked}
            className={props.active ? classes.active : null}
        >{props.children}</Link>

    </li>
)

export default NavigationItem;