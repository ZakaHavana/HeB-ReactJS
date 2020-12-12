import React, { Component } from 'react';

import yusimy from '../../../../../assets/images/yusimi99.jpg';
import yuliet from '../../../../../assets/images/yulietsaul.jpg';
import classes from '../Teachers/Teachers.module.css';
import Modal from '../../../../UI/Modal/Modal';
import Band1 from './BandsInfo/BandInfo1';
import Band2 from './BandsInfo/BandInfo2';


class Bands extends Component {

    state = {
        purchasing1: false,
        purchasing2: false
    }

    purchaseHandler1 = () => {
        this.setState({ purchasing1: true })
    }

    purchaseCancelHandler1 = () => {
        this.setState({ purchasing1: false })
    }

    purchaseHandler2 = () => {
        this.setState({ purchasing2: true })
    }

    purchaseCancelHandler2 = () => {
        this.setState({ purchasing2: false })
    }

    render() {
        return (
            <div >
                <Modal 
                show={this.state.purchasing1} 
                modalClosed={this.purchaseCancelHandler1}>
                    <Band1/>
                </Modal>
                <Modal show={this.state.purchasing2} modalClosed={this.purchaseCancelHandler2}>
                    <Band2/>
                </Modal>
                <div className={classes.Divv} >
                    <img onClick={this.purchaseHandler1} className={classes.Participant} src={yuliet} alt="DJs" />
                </div> 
                <div className={classes.Divv}>
                    <img onClick={this.purchaseHandler2} className={classes.Participant} src={yusimy} alt="DJs" />
                </div>
            </div>
        )
    }
}

export default Bands;