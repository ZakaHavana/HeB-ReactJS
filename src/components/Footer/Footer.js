import React from 'react';
import classes from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div>

      <hr className={classes.Hr} />
      <div className={classes.PreSocial}>
        <div><a href="#">Available passes</a></div>
        {/* <div><a href="#">News</a></div> */}
        <div><a href="#">Program 2022</a></div>
      </div>

      <div className={classes.Social}>

        <a href="https://www.facebook.com/havanaenbelgrado" className={classes.Face}>
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/havanaenbelgrado" className={classes.Insta}>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <p><a href="mailto:havanaenbelgrado@gmail.com">havanaenbelgrado@gmail.com</a></p>
      </div>
      <div className={classes.AllRight}>&copy; All rights reserved by Havana en Belgrado</div>
    </div>
    
  )
}

export default Footer;