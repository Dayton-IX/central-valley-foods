import React from 'react';

import logo from '../../assets/img/pig.png';
import classes from './Titlecard.module.css';

const Titlecard = (props) => (
    <div className={classes.Titlecard}>
        <img className={classes.Logo} src={logo} alt="Pig"/>
        <h1>Central Valley Foods</h1>
        <p>Over 80 years of service from the heart of Cache Valley</p>
        <hr />
    </div>
);

export default Titlecard;