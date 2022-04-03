import React from 'react';
// import { Link } from 'react-bootstrap/lib/Navbar';
import classes from './Logo.module.css';
// import LogoImage from '../../assets/images/HeB_logo.png';
import LogoImage from '../../assets/images/web-HeB-logo-crni.png';



const Logo = (props) => (
    // <Link to="/" >
        <div className={classes.Logo} >
            <img src={LogoImage} alt="logo" />
        </div>
    // </Link>
)

export default Logo;