import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Currency from '../../components/Currency';

import doge from '../../assets/doge.png';
import bitcoin from '../../assets/bitcoin.png';
import ethereum from '../../assets/ethereum.png';
import litecoin from '../../assets/litecoin.png';

import './style.css';

const getCoinsForecast = async setCurencyState => {
    await axios.get('http://api.coinlayer.com/api/live?access_key=6bd51985e32095f0e1b468f2955d2395&symbols=DOGE,BTC,ETH,LTC')
        .then(resp => {
            setCurencyState(resp.data.rates);
        })
        .catch(err => {
            console.error(err);
        });;
}

const Wallet = ({ wallet }) => {
    const [curencyState, setCurencyState] = useState();

    useEffect(() => {
        getCoinsForecast(setCurencyState);
    }, []);

    return (
        <div>
            <div className="wallet">
                <Currency curName="Dogecoin" curShortName="DOGE" imgSrc={doge} coins={wallet?.dogeCoin || 0} curValue={curencyState?.DOGE || 0} />
                <Currency curName="Bitcoin" curShortName="BTC" imgSrc={bitcoin} coins={wallet?.btcCoin || 0} curValue={curencyState?.BTC || 0} />
                <Currency curName="Ethereum" curShortName="ETH" imgSrc={ethereum} coins={wallet?.ethCoin || 0} curValue={curencyState?.ETH || 0} />
                <Currency curName="Litecoin" curShortName="LTC" imgSrc={litecoin} coins={wallet?.ltcCoin || 0} curValue={curencyState?.LTC || 0} />
            </div>
        </div>
    )
};

export default Wallet;