import React, { Component } from 'react';

import MainSection from '../MainSection/MainSection';


class MainSections extends Component {

    state = {

        details: [
            {
                title: 'AFTERMOVIE',
                mainText: 'Take a look at the aftermovie that captured the most impressive moments of our last edition!',
                id: 1,
                button: 'WATCH AFTERMOVIE',
                name: 'after',
                image: require('../../../assets/images/afterr.jpg'), alt: 'jedan'
            },
            // {
            //     title: 'LINE UP',
            //     mainText: 'Be informed about the artists to come to our festival!',
            //     id: 2, button: 'LINE UP',
            //     name: 'najava1',
            //     image: require('../../../assets/images/grupna.jpg'),
            //     alt: 'dva'
            // }
            // {
            //     title: 'ARTISTS',
            //     mainText: 'je je je 3',
            //     id: 3, button: 'SEE ALL ARTISTS',
            //     name: 'najava2',
            //     image: require('../../../assets/images/artists.jpg'),
            //     alt: 'tri'
            // }
        ]
    }

    render() {

        return (
            <div>
                {this.state.details.map(el => {
                    return (
                        <MainSection
                            key={el.id}
                            title={el.title}
                            button={el.button}
                            image={el.image}
                            alt={el.alt}
                            text = {el.mainText}
                        />
                    )
                })}
            </div>
        )
    }
}

export default MainSections;