import React from 'react';
import './Navbar.style.css';
import Logo from '../Logo/Logo.component';
import SocialMedia from '../SocialMedia/SocialMedia.component';
import { Link } from 'react-router-dom';


function Navbar() {

    let social_media = [
        {
            keyword: 'Email',
            icon: 'fas fa-envelope-square',
            link: 'mailto:contact@beersandboomerangs.com',
        },
        {
            keyword: 'Instagram',
            icon: 'fab fa-instagram',
            link: 'https://www.instagram.com/inees_almeida/',
        },
        {
            keyword: 'Twitter',
            icon: 'fab fa-twitter',
            link: 'https://www.instagram.com/inees_almeida/',
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
                    <Link to="/about" className="navbar__item">About</Link>
                    <Link to="/about" className="navbar__item disabled">Steam</Link>
                    <Link to="/about" className="navbar__item disabled">Oculus Store</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
