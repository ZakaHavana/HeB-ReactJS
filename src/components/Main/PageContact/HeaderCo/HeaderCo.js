import React from 'react';
import Button from '../../../UI/Button/Button';
import classes from './HeaderCo.module.css';




const HeaderHo = () => {
    return (
        <div>
            <div className={classes.DivSlika}>
                <div className={classes.TextSlika} >
                    CONTACT
                <hr />
                </div>
            </div>
            <form>
                <div>
                    <input type="text" name="name" id="name" placeholder="Full Name" required />
                </div>
                <div>
                    <input type="email" name="email" id="email" placeholder="Email address" required />
                </div>
                <div>
                    <textarea rows="8" placeholder="Question us! ;)" required/>
                </div>
                <div>
                    {/* <input type="submit" name="submit" id="submit" /> */}
                    <Button>Send !</Button>
                </div>
            </form>
        </div>

    )
}

export default HeaderHo;