import React from 'react';

import './style.css';

const Currency = ({ curName, curShortName, imgSrc, curValue }) => {
    const coinCount = Math.floor(Math.random() * 10);
    const coinValue = (coinCount * curValue).toFixed(2);

    return (
        <div className="currency">
            <div className="currency-header">
                <img src={imgSrc} alt={curShortName} width="32" height="32"></img>
                <div className="currency-name">{curName}</div>
            </div>
            <div>
                <span className="currency-value">{coinCount}</span>
                <span>{curShortName}</span>
            </div>
            <div>
                <span>$</span>
                <span className="currency-in-usd">{coinValue}</span>
                <span>USD</span>
            </div>
        </div>
    )
}

export default Currency;