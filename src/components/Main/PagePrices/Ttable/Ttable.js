import React, { Component } from 'react';
import classes from './Ttable.module.css';
import Button from '../../../UI/Button/Button';

class Table extends Component {

    state = {
        details: [
            { title: 'FULL PASS until July 31st', firstPrice: '110 e', secondPrice: 'Workshops (2 days)', thirdPrice: 'Parties (4 days)', concerts: '2 concerts' },
            { title: 'FULL PASS until September 30st', firstPrice: '120 e', secondPrice: 'Workshops (2 days)', thirdPrice: 'Parties (4 days)', concerts: '2 concerts' },
            { title: 'FULL PASS until October 31st', firstPrice: '130 e', secondPrice: 'Workshops (2 days)', thirdPrice: 'Parties (4 days)', concerts: '2 concerts' },
            { title: 'FULL PASS until November 1st', firstPrice: '140 e', secondPrice: 'Workshops (2 days)', thirdPrice: 'Parties (4 days)', concerts: '2 concerts' },
            // { title: 'PARTY PASS', firstPrice: 'firstPrice5', secondPrice: 'secondPrice5', thirdPrice: 'thirdPrice5' }
        ]
    }
    render() {
        return (
            <div>
                {this.state.details.map(el => {
                    return (
                        <table key={el.title} className={classes.Table}>
                            <tbody>
                                <tr>
                                    <th style={{color:'darkred', height:'20px'}}>
                                        {el.title}
                                    </th>

                                </tr>
                                <tr>
                                    <td className={classes.Drugi}>
                                        {el.firstPrice}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {el.secondPrice}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.Drugi}>
                                        {el.thirdPrice}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {el.concerts}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.Drugi}>
                                        <Button>
                                            BUY NOW
                                        </Button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    )
                })}

            </div>
        )
    }
}

export default Table;