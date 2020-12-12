import React, { Component } from 'react';
import classes from './LineUp.module.css';
import MainTitle from '../Main/MainTitle/MainTitle';
import Participants from '../Main/PageArtists/Participants/Participants';


class LineUp extends Component {

    render() {

        return (
            <div className={classes.LineUpContainer}>
                <MainTitle className={classes.Title}>
                    LINE UP
                </MainTitle>

                <div className={classes.MainSection} >

                    <div className={classes.ImgDiv}>
                        <div>
                            <div style={{ color: 'black' }}>Be informed about the artists to come to Havana En Belgrado 10 !</div>
                            {/* <Button className={classes.Btn}>DISCOVER OUR LINE UP</Button> */}
                        </div>
                        <Participants/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LineUp;