import React from 'react';
import './Logo.style.css';
import logo from '../../assets/img/logo-4k.png';

function Logo() {
    return (
        <div className="logo">
            <img src={logo} className="logo__img" />
        </div>
    );
}

export default Logo;
