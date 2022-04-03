import React, { Component } from 'react';
import sample from '../../assets/videos/heb09.mp4';
import classes from './Main.module.css';
import MainSections from '../Main/MainSections/MainSections';
// import SimpleSlider from '../../components/Slider/Slider';
// import Newsletter from '../UI/NewsLetter/Newsletter';
import News from '../Slideshow/News';
import LineUp from '../LineUp/LineUp';

class Main extends Component {

    render() {
        return (
            <div className={classes.MainContainer}>
                <div className={classes.VideoTagContainer}>

                    <video className={classes.VideoTag} autoPlay loop muted>
                        <source src={sample} type='video/mp4' />
                    </video>
                    <div className={classes.Celebrate}>
                        <div className={classes.Hebisback}><span className={classes.EnX}>H<span className={classes.Bela}>E</span>B</span><span className={classes.DecadeWord}> is </span><span className={classes.EnX}>BACK</span> 
                        </div>
                        <div className={classes.Sept}>1 - 4 September 2022 </div>
                        <a href={"https://widget.weezevent.com/ticket/E829418/?code=11528&locale=en-GB&width_auto=1&color_primary=00AEEF"} className={classes.BookNow}>BOOK PASS</a>
                    </div>
                </div>


                <div className={classes.Decade}>
                    <div className={classes.FirstPar}>  A <span className={classes.DecadeWord}>DECADE</span>.</div>

                    <div className={classes.LastPar}> That's how long this beautiful idea exists. It's hard to believe that so much time passed. We are older and hopefully wiser but the passion and joy that HeB brings us, is stronger and bigger then ever!! With excitement and enthusiasm we present to you <div>HAVANA<span className={classes.EnX}>EN</span>BELGRADO <span className={classes.EnX}>10</span>!</div> Celebrate with us the first decade!! </div>

                    <div className={classes.LastPar}> Your <span className={classes.EnX}>HEB</span> &#9829;</div>

                </div>
                <News />
                <LineUp />
                <MainSections />
                {/* <SimpleSlider /> */}
                {/* <Newsletter/> */}
            </div>
        )
    }
}

export default Main;