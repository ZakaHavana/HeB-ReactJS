import React, { Component } from 'react';
import Main from '../Main/Main';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import PageArtists from '../../components/Main/PageArtists/PageArtists';
import PageProgram from '../Main/PageProgram/PageProgram';
import PageHotel from '../Main/PageHotel/PageHotel';
import PagePrices from '../Main/PagePrices/PagePrices';
import PageContact from '../Main/PageContact/PageContact';
import PageStory from '../Main/PageStory/PageStory';

class Layout extends Component {

    state = {
        showSideDrawer: false,
        showNewsLetter: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    // Main je PageOne
    render() {
        return (
            <div>
                <Toolbar
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />

                <Switch>
                    <Route path="/artists" component={PageArtists} />
                    <Route path="#" component={PageArtists} />
                    {/* <Route path="/program" component={PageProgram} /> */}
                    <Route path="#" component={PageProgram} />
                    <Route path="/hotel" component={PageHotel} />
                    <Route path="#" component={PageHotel} />
                    <Route path="/price" component={PagePrices} />
                    {/* <Route path="#" component={PagePrices} /> */}
                    {/* <Route path="/story" component={PageStory} /> */}
                    <Route path="#" component={PageStory} />
                    <Route path="/contact" component={PageContact} />
                    <Route path="/" component={Main} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Layout;

