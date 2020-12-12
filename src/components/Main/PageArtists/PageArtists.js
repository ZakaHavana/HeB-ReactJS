import React, { Component } from 'react';
import Header from '../../Header/Header';

import { Route, Switch } from 'react-router-dom';
import Participants from './Participants/Participants';
import Teachers from './Participants/Teachers/Teachers';
import DJs from './Participants/DJs/DJs';
import Bands from './Participants/Bands/Bands';


class PageArtists extends Component {

    render() {
        return (
            <div>
                <Header />

                <Switch>
                    <Route path="/artists/teachers" component={Teachers} />
                    <Route path="/artists/DJs" component={DJs} />
                    <Route path="/artists/bands" component={Bands} />
           
                    <Route path="/artists" component={Participants} />
                </Switch>
            </div>
        )
    }
}

export default PageArtists;