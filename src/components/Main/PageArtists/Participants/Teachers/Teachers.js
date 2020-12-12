import React, { Component } from 'react';
import diana from '../../../../../assets/images/dianaosmani.jpg';
import andy from '../../../../../assets/images/andyu.jpg';
import dvojica from '../../../../../assets/images/dvojica99.jpg';
import yoyo from '../../../../../assets/images/yoyo99.jpg';
import yusimy from '../../../../../assets/images/yusimi99.jpg';
import yuliet from '../../../../../assets/images/yulietsaul.jpg';
import classes from './Teachers.module.css';
import Modal from '../../../../UI/Modal/Modal';
import Teacher1 from './TeacherInfo/TeacherInfo1';
import Teacher2 from './TeacherInfo/TeacherInfo2';


class Teachers extends Component {

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
                    modalClosed={this.purchaseCancelHandler1}
                >
                    <Teacher1/>
                </Modal>
                <Modal
                    show={this.state.purchasing2}
                    modalClosed={this.purchaseCancelHandler2}
                >
                    <Teacher2/>
                </Modal>
                <Modal
                    show={this.state.purchasing2}
                    modalClosed={this.purchaseCancelHandler2}
                >
                    <Teacher2/>
                </Modal>
                <div className={classes.Divv} >
                    <img 
                    onClick={this.purchaseHandler1}
                    className={classes.Participant} 
                    src={diana} alt="teachers" />
                  
                </div >
                <div className={classes.Divv}>
                    <img 
                    onClick={this.purchaseHandler2}
                    className={classes.Participant} src={andy} alt="teachers" />
                 
                </div>
                <div className={classes.Divv}>
                    <img 
                    onClick={this.purchaseHandler2}
                    className={classes.Participant} src={dvojica} alt="teachers" />
                   
                </div>
                <div className={classes.Divv}>
                    <img className={classes.Participant} src={yoyo} alt="teachers" />
                  
                </div >
                <div className={classes.Divv} >
                    <img className={classes.Participant} src={yuliet} alt="teachers" />
                
                </div>
                <div className={classes.Divv}>
                    <img className={classes.Participant} src={yusimy} alt="teachers" />
               
                </div>
            </div>
        )
    }
}

export default Teachers;