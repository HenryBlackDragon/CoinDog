import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Currency from '../../components/Currency';

import doge from '../../assets/doge.png';
import bitcoin from '../../assets/bitcoin.png';
import ethereum from '../../assets/ethereum.png';
import letecoin from '../../assets/litecoin.png';

import './style.css';

const getCoinsData = async (setCurencyState) => {
    // await axios.get('http://api.coinlayer.com/api/live?access_key=6bd51985e32095f0e1b468f2955d2395&symbols=DOGE,BTC,ETH,LTC')
    //     .then(resp => {
    //         setCurencyState(resp.data.rates);
    //     });
}

const Wallet = () => {
    const [curencyState, setCurencyState] = useState();

    useEffect(() => {
        getCoinsData(setCurencyState);
    }, []);

    return (
        <div className="wallet">
            <Currency curName="Dogecoin" curShortName="DOGE" imgSrc={doge} curValue={curencyState?.DOGE || 0} />
            <Currency curName="Bitcoin" curShortName="BTC" imgSrc={bitcoin} curValue={curencyState?.BTC || 0} />
            <Currency curName="Ethereum" curShortName="ETH" imgSrc={ethereum} curValue={curencyState?.ETH || 0} />
            <Currency curName="Litecoin" curShortName="LTC" imgSrc={letecoin} curValue={curencyState?.LTC || 0} />
        </div>
    )
};

export default Wallet;