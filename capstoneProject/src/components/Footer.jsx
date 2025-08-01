import React from "react";
import logo from '../assets/icons_assets/logo.svg';
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer>
            <div className="footer-logo">
                <img src={logo} alt="Little Lemon Logo" className="logo"/>
                <p>&copy; 2025 Little Lemon. All rights reserved.</p>
            </div>
            <div className="footer-navigation">
                <h1>Navigation</h1>
                <a href="/">Home</a>
                <a href="/#about">About</a>
                <a href="/#menu">Menu</a>
                <Link to="/booking"><a href="#reservations">Reservations</a></Link>
                <a href="/#contact">Contact</a>
            </div>
            <div className="footer-socials">
                <h1>Socials</h1>
                <a href="https://www.facebook.com/">Facebook</a>
                <a href="https://www.instagram.com/">Instagram</a>
                <a href="https://www.x.com/">X</a>
            </div>
            <div className="footer-contact">
                <h1>Contact</h1>
                <a href="mailto: example@gmail.com">Email</a>
                <a href="tel:+1234567890">Phone</a>
            </div>
        </footer>
    )

}

export default Footer;