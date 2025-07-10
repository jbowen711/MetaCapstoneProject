import React, { useState } from "react";
import hamburger from '../assets/icons_assets/hamburger_menu.svg';
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";



function Nav(){
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Menu", href: "/#menu" },
        { name: "Reservations", href: "/booking", useLink: true},
        { name: "Order Online", href: "/#orderOnline" },
        { name: "Login", href: "/#login" },
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
                        {link.useLink ? (
                            <Link
                                to={link.href}
                                className="nav-link"
                                onClick={() => setIsOpen(false)}>
                                    {link.name}
                            </Link>
                        ) :
                              <HashLink
                                smooth
                                to={link.href}
                                className="nav-link"
                                onClick={() => setIsOpen(false)}>
                                    {link.name}
                                </HashLink>
                        }
                    </li>
                ))}
            </ul>
        </nav>
    )

}

export default Nav;