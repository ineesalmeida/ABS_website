import React from 'react';
import './Navbar.style.css';
import Logo from '../Logo/Logo.component';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <Logo />
            </div>
            <div className="navbar__container">
                <Link to="/about" className="navbar__item">About</Link>
                <a href="#" className="navbar__item disabled">Steam Store</a>
                <a href="#" className="navbar__item disabled">Oculus Store</a>
            </div>
        </div>
    );
}

export default Navbar;