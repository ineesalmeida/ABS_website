import React from 'react';
import './Navbar.style.css';
import Logo from '../Logo/Logo.component';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <Link to="/" class="logo_link">
                    <Logo />
                </Link>
            </div>
            <div className="navbar__container">
                <Link to="/about" className="navbar__item">About</Link>
                <Link to="/about" className="navbar__item disabled">Steam Store</Link>
                <Link to="/about" className="navbar__item disabled">Oculus Store</Link>
            </div>
        </div>
    );
}

export default Navbar;
