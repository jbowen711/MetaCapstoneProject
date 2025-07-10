import React from "react"
import restaurantImage from '../assets/icons_assets/restaurant.jpg';
import { Link } from "react-router-dom";
function Hero () {
    return (
        <>
            <div className="hero">
                <br></br>
                <div className="hero-content">
                    <h1 className="hero-title">Little Lemon</h1>
                    <p className="hero-subtitle">Chicago</p>
                    <p className="hero-description">
                    This will be the description of what is happening in the hero section of the web page. Little Lemon restaurant.
                    </p>
                    <Link to="/booking"><button className="hero-button">Reserve a Table</button></Link>
                </div>
                <div className="hero-image">
                    <img src={restaurantImage} alt="Restaurant Image" height="350" width="500"/>
                </div>
            </div>
        </>

    )



};
export default Hero;