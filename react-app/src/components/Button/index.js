import React from 'react';

import './style.css';

const Button = ({ curShortName, onClickHandler }) => {
    const btnTitle = `Buy 1 ${curShortName}`;

    return (
        <div className="btn-container">
            <button className="fab_btn" title={btnTitle} onClick={onClickHandler}>+</button>
        </div>
    );

};

export default Button;