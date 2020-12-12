import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from './News.module.css';
import newsPic from '../../assets/images/postponed.jpg'
import dianaPic from '../../assets/images/dianacancel.jpg'
import welcomePic from '../../assets/images/welcome.jpg'
import Button from '../UI/Button/Button';



const Slide = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    let firstSlide, secondSlide, thirdSlide, fourthSlide;

    const [state, setState] = useState(true)

    const switchToImageHandler = () => {
        setState(false)
    }

    const switchToTextHandler = () => {
        setState(true)
    }

    //prvi slajd

    if (state === true) {

        firstSlide = <div className={classes.ImgSlide}><img className={classes.Pic} src={newsPic} alt="newss" />
            <div className={classes.DivNews}>
                <div>See the latest and updated news of Havana en Belgrado 10 !</div>
                <Button onClick={switchToImageHandler}>READ THIS NEWS !</Button>
            </div>
        </div>

        secondSlide = <div className={classes.ImgSlide}><img className={classes.Pic} src={dianaPic} alt="newss" />
            <div className={classes.DivNews}>
                <div>See the latest and updated news of Havana en Belgrado 10 !</div>
                <Button onClick={switchToImageHandler}>READ THIS NEWS !</Button>
            </div>
        </div>

        thirdSlide = <div className={classes.ImgSlide}><img className={classes.Pic} src={welcomePic} alt="newss" />
            <div className={classes.DivNews}>
                <div>See the latest and updated news of Havana en Belgrado 10 !</div>
                <Button onClick={switchToImageHandler}>READ THIS NEWS !</Button>
            </div>
        </div>

        fourthSlide = <div className={classes.ImgSlide}><img className={classes.Pic} src={newsPic} alt="newss" />
            <div className={classes.DivNews}>
                <div>See the latest and updated news of Havana en Belgrado 10 !</div>
                <Button onClick={switchToImageHandler}>READ THIS NEWS !</Button>
            </div>
        </div>

    } else if (state === false) {

        firstSlide = <div className={classes.TextSection}><div className={classes.textCarousel}> HeB10 is POSTPONED‼️<br /><br /> After long considerations, debates and conversations we have decided to POSTPONE this year's edition of HeB for next year!!
        The situation in Serbia as well as around the world seem to be deteriorating, and predictions are that in November seasonal flu and covid will peak, with coming cold weather. Serbian government is changing its course of action constantly, so we can't rely on any.<br />
        Our priority has always been safety and health of our guests and it seems that it will be hard to guarantee this.<br />
        Jubilant 10th edition of Havana en Belgrado deserves everything best! And we won't settle for less!<br />Stay safe and healthy and we will get back to you soon with more info about dates for 2021.<br /><br />Your HeB Team❤
        </div><Button className={classes.Btn} onClick={switchToTextHandler}>Back to image</Button></div>

        secondSlide = <div className={classes.TextSection}><div className={classes.textCarousel}> We are sad and disappointed to announce that Diana Rodriguez won't be able to come to HeB this year. <br />As you might have heard, Diana recently got married (Congrats!) and she is in the middle of the process of getting EU permanent residency.<br /> While this process is happening she can't leave EU, and thus is unable to come to Belgrade.<br /> We were working hard trying to find the solutions, but it seems like there is no way around this.
        <br /><br />Your HEB ❤️
        </div ><Button onClick={switchToTextHandler}>Back to image</Button></div>

        thirdSlide = <div className={classes.TextSection}> <div className={classes.textCarousel}> Are you ready to start your HEB9?!<br />
        We are, and we are waiting for you tonight on our well known WELCOME PARTY 😎<br />
        Totaly new location for HEB9, Club half
        Everybody is welcome 🎉<br />if you don’t have one of HEB9 passes don’t hesitate to come 😉
    </div><Button onClick={switchToTextHandler}>Back to image</Button></div>

        fourthSlide = <div className={classes.TextSection}><div className={classes.textCarousel}> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Why do we use it?It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Why do we use it?It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div><Button onClick={switchToTextHandler}>Back to image</Button></div>
    }


    return (
        <div className={classes.NewsContainer}>
            <div className={classes.Naslov}>NEWS</div>
            <hr className={classes.Hr}></hr>
          
            <Carousel className={classes.Carousel} responsive={responsive}>

                <div className={classes.Slide}>
                    {firstSlide}
                </div>
                <div className={classes.Slide}>
                    {secondSlide}
                </div>
                <div className={classes.Slide}>
                    {thirdSlide}
                </div>
                <div className={classes.Slide}>
                    {fourthSlide}
                </div>
            </Carousel>
        </div>
    )
}


export default Slide;