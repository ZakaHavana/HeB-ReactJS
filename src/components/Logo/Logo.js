import React from 'react';
import classes from './Logo.module.css';
import LogoImage from '../../assets/images/HeB_logo.png';


const Logo = (props) => (
    <div className={classes.Logo} >
        <img src={LogoImage} alt="logo" />
    </div>
)

export default Logo;