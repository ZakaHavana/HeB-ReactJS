import React, { Component } from 'react';
import HeaderHo from './HeaderHo/HeaderHo';

import classes from './PageHotel.module.css'


class PageHotel extends Component {
    render() {
        return (
            <div>
                <HeaderHo />
                <div className={classes.Text}>
                    <div >
                        <div>Conference hotel in the New Belgrade business district, with event facilities and a spa. Just off the E70 motorway, the Holiday Inn® Belgrade hotel is 15 minutes by car from Belgrade Nikola Tesla Airport (BEG). The hotel adjoins the Belexpocentar venue, and is a short drive from the multipurpose Sava Centar.</div>
                        <div>New Belgrade bus and tram station is a seven-minute walk away.</div>
                        <div>To take advantage of a special offer to our visitors of Havana en Belgrado 9 please fill out the RESERVATION FORM and book your room before 08.10.2019.</div>
                        <div>Please send your reservation to Holiday Inn directly.</div>
                        <div>http://www.holidayinn.com</div>

                        <div className={classes.Red}>
                            <div>Please complete the registration form and send to Holiday Inn. In order to take advantage of these specially negotiated rates reservations should be made before 08.10.2019. All reservations will be confirmed according to hotels availability.</div>
                            <div>Please make your booking as soon as possible to have your rooms confirmed.Not included: Tourist tax and insurance per person per day. </div>
                            <div>Tourist tax is subject to change.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageHotel;

