import React, { useContext } from 'react';
import { Context } from '../../context';

import Button from '../Button';
import './style.css';

const Currency = ({ curName, curShortName, imgSrc, coins, curValue }) => {
    const coinValue = (coins * curValue).toFixed(2);
    const { updateWallet } = useContext(Context);

    return (
        <div className="currency">
            <div className="currency-header">
                <img src={imgSrc} alt={curShortName} width="32" height="32"></img>
                <div className="currency-name">{curName}</div>
            </div>
            <div>
                <span className="currency-value">{coins}</span>
                <span>{curShortName}</span>
            </div>
            <div>
                <span>$</span>
                <span className="currency-in-usd">{coinValue}</span>
                <span>USD</span>
            </div>
            <Button curShortName={curShortName} onClickHandler={() => updateWallet(curValue, curShortName)} />
        </div>
    )
}

export default Currency;