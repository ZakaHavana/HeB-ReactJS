import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';


const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/price" clicked={props.clicked}>BUY YOUR PASS!</NavigationItem>
        <NavigationItem link="/" clicked={props.clicked}>Home</NavigationItem>
        <NavigationItem link="/program" clicked={props.clicked}>Program</NavigationItem>
        <NavigationItem link="/artists" clicked={props.clicked}>Artists</NavigationItem>
        <NavigationItem link="/hotel" clicked={props.clicked}>Accomodation</NavigationItem>
        <NavigationItem link="/story" clicked={props.clicked}>Story of HeB</NavigationItem>
        <NavigationItem link="/contact" clicked={props.clicked}>Contact</NavigationItem>
    </ul>
)

export default NavigationItems;