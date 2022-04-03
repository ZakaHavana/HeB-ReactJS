import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from './News.module.css';
// import newsPic from '../../assets/images/postponed.jpg'
import hebIsBackPic from '../../assets/images/10.png'
// import welcomePic from '../../assets/images/welcome.jpg'
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
    let firstSlide, secondSlide;
    // thirdSlide, fourthSlide;

    const [state, setState] = useState(true)

    const switchToImageHandler = () => {
        setState(false)
    }

    const switchToTextHandler = () => {
        setState(true)
    }

    //prvi slajd

    if (state === true) {

        firstSlide = <div className={classes.ImgSlide}><img className={classes.Pic} src={hebIsBackPic} alt="newss" />
            <div className={classes.DivNews}>
                <div>The first moment we heard them we fell in love with their music.
                    It was 2007.<br/><br/>
                    The first time we met them, we felt in love with their energy.
                    It was 2010.<br/><br/>
                    The first time we hosted them we fell in love with their humility.
                    It was 2015.<br/><br/>
                    They are a big part of our journey and we are happy to be their friends. This will be the third time they are playing at HeB and every time was incredible and very special for us.<br/><br/>
                    With small 2 years delay, again at HeB - ALEXANDER ABREU Y HAVANA D’PRIMERA!!!</div>
                {/* <Button onClick={switchToImageHandler}>Tell me more about this update !</Button> */}
            </div>
        </div>

        // secondSlide = <div className={classes.ImgSlide}><img className={classes.Pic} src={dianaPic} alt="newss" />
        //     <div className={classes.DivNews}>
        //         <div>See the latest and updated news of Havana en Belgrado 10 !</div>
        //         <Button onClick={switchToImageHandler}>Tell me more about this update !</Button>
        //     </div>
        // </div>

        // thirdSlide = <div className={classes.ImgSlide}><img className={classes.Pic} src={welcomePic} alt="newss" />
        //     <div className={classes.DivNews}>
        //         <div>See the latest and updated news of Havana en Belgrado 10 !</div>
        //         <Button onClick={switchToImageHandler}>Tell me more about this update !</Button>
        //     </div>
        // </div>

        // fourthSlide = <div className={classes.ImgSlide}><img className={classes.Pic} src={newsPic} alt="newss" />
        //     <div className={classes.DivNews}>
        //         <div>See the latest and updated news of Havana en Belgrado 10 !</div>
        //         <Button onClick={switchToImageHandler}>Tell me more about this update !</Button>
        //     </div>
        // </div>

    } else if (state === false) {

        firstSlide = <div className={classes.TextSection}><div className={classes.textCarousel}> HEB IS BACK 😊<br /><br /> This time we will just say, Save the date because HEB IS BACK 😊 1-4.9.2022.🎈 more info soon 😎.<br /><br />Your HeB Team❤
        </div><Button className={classes.Btn} onClick={switchToTextHandler}>Back to image</Button></div>

        // secondSlide = <div className={classes.TextSection}><div className={classes.textCarousel}> We are sad and disappointed to announce that Diana Rodriguez won't be able to come to HeB this year. <br />As you might have heard, Diana recently got married (Congrats!) and she is in the middle of the process of getting EU permanent residency.<br /> While this process is happening she can't leave EU, and thus is unable to come to Belgrade.<br /> We were working hard trying to find the solutions, but it seems like there is no way around this.
        // <br /><br />Your HEB ❤️
        // </div ><Button onClick={switchToTextHandler}>Back to image</Button></div>

        //     thirdSlide = <div className={classes.TextSection}> <div className={classes.textCarousel}> Are you ready to start your HEB9?!<br />
        //     We are, and we are waiting for you tonight on our well known WELCOME PARTY 😎<br />
        //     Totaly new location for HEB9, Club half
        //     Everybody is welcome 🎉<br />if you don’t have one of HEB9 passes don’t hesitate to come 😉
        // </div><Button onClick={switchToTextHandler}>Back to image</Button></div>

        //     fourthSlide = <div className={classes.TextSection}><div className={classes.textCarousel}> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        //     Why do we use it?It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        //     Why do we use it?It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        //             </div><Button onClick={switchToTextHandler}>Back to image</Button></div>
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
                {/* <div className={classes.Slide}>
                    {thirdSlide}
                </div>
                <div className={classes.Slide}>
                    {fourthSlide}
                </div> */}
            </Carousel>
        </div>
    )
}


export default Slide;