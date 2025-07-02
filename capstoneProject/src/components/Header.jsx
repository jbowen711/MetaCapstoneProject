import React from "react";
import logo from '../assets/icons_assets/logo.svg';
import '../App.css';
import Nav from "./Nav";


function Header(){
    return(
        <header className="header">
            <img src={logo} alt="Little Lemon Logo" className="logo" />
            <Nav></Nav>
        </header>
    )

}

export default Header;