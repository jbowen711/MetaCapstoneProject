import React from "react";
import { useState } from "react";
import hamburger from '../assets/icons_assets/hamburger_menu.svg';



function Nav(){
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Menu", href: "#menu" },
        { name: "Reservations", href: "#reservations" },
        { name: "Order Online", href: "#orderOnline" },
        { name: "Login", href: "#login" },
    ];

    return(
        <nav className="main-nav">
            <button
            className="hamburger-toggle"
            onClick={()=> setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            > <img src={hamburger} alt="hamburgerMenu" height="20" />
            </button>
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.href} className="nav-link">{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

export default Nav;