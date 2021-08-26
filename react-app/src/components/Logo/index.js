import React from 'react';

import './style.css';
import doge from '../../assets/doge.png';

const Logo = () => (
    <>
        <div className="logo">
            <img src={doge} alt="doge" width="46" height="46"></img>
        </div>
        <span className="logoTitle">CoinDog</span>
    </>

);

export default Logo;