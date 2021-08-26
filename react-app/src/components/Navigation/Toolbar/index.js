import React from 'react';

import './style.css';

import Logo from '../../Logo';

const Toolbar = () => (
    <header>
        <div className="logo-container">
            <Logo />
        </div>
        <nav className="">
            {/* <NavigationItems isAuthenticated={props.isAuth} /> */}
            {/* <NavigationItems /> */}
        </nav>
    </header>
);

export default Toolbar;