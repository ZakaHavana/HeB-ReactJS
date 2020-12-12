import React, { Component } from 'react';
import classes from './MainSection.module.css';

import Button from '../../UI/Button/Button';
import MainTitle from '../MainTitle/MainTitle';
import sample from '../../../assets/videos/heb.mp4';
import poster from '../../../assets/images/afterr.jpg';



class MainSection extends Component {

    render() {

        return (
            <div className={classes.AfterMovieContainer}>
                <MainTitle >
                    {this.props.title}
                </MainTitle>

                <div className={classes.MainSection} >
                    <div className={classes.ImgDiv}>
                    </div>
                   

                    <div className={classes.UnderPic}>
                        <div>{this.props.text}</div>
                        <Button>{this.props.button}</Button>
                    </div>

                </div>
            </div>
        )
    }
}

export default MainSection;