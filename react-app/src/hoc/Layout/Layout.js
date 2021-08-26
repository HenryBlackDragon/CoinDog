import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import { Context } from '../../context';

import Toolbar from '../../components/Navigation/Toolbar';
import Wallet from '../../container/Wallet';

const getWalletData = async setWalletState => {
    await axios.get('/wallet')
        .then(resp => {
            setWalletState(resp.data);
        })
        .catch(err => {
            console.error(err);
        });
};

const saveWalletData = async walletState => {
    await axios.post('/wallet', walletState)
        .then(resp => {
           console.log(resp);
        })
        .catch(err => {
            console.error(err);
        });
};

const getUpdateObject = (walletState, coinType) => {
    switch (coinType) {
        case 'DOGE':
            return {
                ...walletState,
                dogeCoin: walletState.dogeCoin + 1
            }
        case 'BTC':
            return {
                ...walletState,
                btcCoin: walletState.btcCoin + 1,
            }
        case 'ETH':
            return {
                ...walletState,
                ethCoin: walletState.ethCoin + 1
            }
        case 'LTC':
            return {
                ...walletState,
                ltcCoin: walletState.ltcCoin + 1
            }
        default:
            return {
                ...walletState
            }
    }
}

const Layout = () => {
    const [walletState, setWalletState] = useState();
    const prevWalletRef = useRef();

    useEffect(() => {
        getWalletData(setWalletState);
    }, []);

    useEffect(() => {
        if (prevWalletRef.current !== undefined && prevWalletRef.current !== walletState) {
            saveWalletData(walletState);
        }
    }, [walletState]);

    useEffect(() => {
        prevWalletRef.current = walletState;
    });

    const updateWallet = (cash, cointType) => {
        if (walletState.cash - cash < 0) {
            console.error(`You don't have money!`);
        } else {
            const updateCoins = getUpdateObject(walletState, cointType);

            setWalletState({
                ...updateCoins,
                cash: walletState.cash - cash,
            });
        }
    }

    return (
        <Context.Provider value={{ updateWallet }}>
            <Toolbar walletCash={walletState?.cash || 0} />
            <Wallet wallet={walletState} />
        </Context.Provider>
    );
}

export default Layout;