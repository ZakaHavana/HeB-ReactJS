import React, { Component } from 'react';

import andy from '../../../../../assets/images/andyu.jpg';
import dvojica from '../../../../../assets/images/dvojica99.jpg';
import yoyo from '../../../../../assets/images/yoyo99.jpg';
import yusimy from '../../../../../assets/images/yusimi99.jpg';
import yuliet from '../../../../../assets/images/yulietsaul.jpg';
import classes from '../Teachers/Teachers.module.css';
import Modal from '../../../../UI/Modal/Modal';
import DJ1 from './DJInfo/DJInfo1';
import DJ2 from './DJInfo/DJInfo2';


class DJs extends Component {

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
            <div>

                {/* modali */}

                <Modal
                    show={this.state.purchasing1}
                    modalClosed={this.purchaseCancelHandler1}
                >
                    <DJ1 />
                </Modal>
                <Modal
                    show={this.state.purchasing2}
                    modalClosed={this.purchaseCancelHandler2}
                >
                    <DJ2 />
                </Modal>
                <Modal
                    show={this.state.purchasing2}
                    modalClosed={this.purchaseCancelHandler2}
                >
                    <DJ2 />
                </Modal>
                <div className={classes.Divv}>
                    <img
                        onClick={this.purchaseHandler1}
                        className={classes.Participant} src={andy} alt="DJs" />
                </div>

                {/* artisti */}

                <div className={classes.Divv}>
                    <img
                        onClick={this.purchaseHandler2}
                        className={classes.Participant} src={dvojica} alt="DJs" />
                </div>

                <div className={classes.Divv}>
                    <img
                        onClick={this.purchaseHandler2}
                        className={classes.Participant} src={yoyo} alt="DJs" />
                </div >

                <div className={classes.Divv} >
                    <img className={classes.Participant} src={yuliet} alt="DJs" />
                </div>
                <div className={classes.Divv}>
                    <img className={classes.Participant} src={yusimy} alt="DJs" />
                </div>
            </div>
        )
    }
}

export default DJs;