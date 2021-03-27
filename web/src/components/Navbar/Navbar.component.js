import React from 'react';
import './Navbar.style.css';
import Logo from '../Logo/Logo.component';
import SocialMedia from '../SocialMedia/SocialMedia.component';
import { Link } from 'react-router-dom';


function Navbar() {

    let social_media = [
        {
            keyword: 'Email',
            icon: 'far fa-envelope',
            link: 'mailto:contact@beersandboomerangs.com',
        },
        {
            keyword: 'Twitter',
            icon: 'fab fa-twitter',
            link: 'https://twitter.com/jdiogobc/',
        },
    ]

    return (
        <div className="navbar">
            <div className="navbar__container logo">
                <Link to="/" className="logo_link">
                    <Logo />
                </Link>
            </div>
            <div className="navbar__container links">
                <div className="navbar__social">
                    <SocialMedia social_media_items={social_media} />
                </div>
                <div className="navbar__links">
                    <Link to="/" className="navbar__item">Home</Link>
                    <Link to="/about" className="navbar__item">About</Link>
                    <Link to="/about" className="navbar__item disabled">Steam</Link>
                    <Link to="/about" className="navbar__item disabled">Oculus Store</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
