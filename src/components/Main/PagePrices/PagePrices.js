import React, { Component } from 'react';
import HeaderPrice from './HeaderPrice/HeaderPrice';
import Table from './Ttable/Ttable';

import classes from './PagePrices.module.css'


class PagePrices extends Component {
    render() {
        return (
            <div>
                <HeaderPrice />
                <div >
                   <Table/>
                </div>
            </div>
        )
    }
}

export default PagePrices;

