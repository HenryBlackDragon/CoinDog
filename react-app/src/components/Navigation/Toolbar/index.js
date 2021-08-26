import React from 'react';

import './style.css';

import Logo from '../../Logo';

const Toolbar = ({ walletCash }) => (
    <header>
        <div className="logo-container">
            <Logo />
        </div>
        <div className="cash"><span>$</span>{walletCash.toFixed(2)}</div>
    </header>
);

export default Toolbar;