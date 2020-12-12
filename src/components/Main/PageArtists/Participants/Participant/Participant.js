import React from 'react';
import classes from './Participant.module.css';
import { Link } from 'react-router-dom';


const Participant = (props) => (

    <Link to={props.link}><img className={classes.Participant} src={props.image} alt={props.alt} /> </Link>

)

export default Participant;