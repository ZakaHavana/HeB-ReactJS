import React from 'react';
import classes from './Footer.module.css';
import Logo from '../Logo/Logo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <Logo />
      <div className={classes.PreSocial}>

        <div><a href="#">Available passes</a></div>
        <div><a href="#">News</a></div>
        <div><a href="#">Program 2020</a></div>
      </div>

      <div className={classes.Social}>

        <a href="https://www.facebook.com/havanaenbelgrado" className={classes.Face}>
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/havana_belgrado" className={classes.Twitter}>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/havanaenbelgrado" className={classes.Insta}>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <p><a href="mailto:havanaenbelgrado@gmail.com">havanaenbelgrado@gmail.com</a></p>
      </div>


    </div>

  )
}

export default Footer;