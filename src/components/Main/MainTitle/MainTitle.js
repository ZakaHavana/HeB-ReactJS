import React from 'react';
import classes from './MainTitle.module.css'

const MainTitle =(props)=>(
    <div>
           <p className={classes.Naslov}>{props.children}</p>
                <hr className={classes.Hr} />
    </div>
)

export default MainTitle;