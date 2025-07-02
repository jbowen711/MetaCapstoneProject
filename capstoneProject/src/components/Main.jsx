import './Main.css';
import restaurantImage from '../assets/icons_assets/restaurant.jpg';

function Main(){
    return(
        <div className="main">
            <div className="hero">
                <br></br>
                <div className="hero-content">
                    <h1 className="hero-title">Little Lemon</h1>
                    <p className="hero-subtitle">Chicago</p>
                    <p className="hero-description">
                    This will be the description of what is happening in the hero section of the web page. Little Lemon restaurant.
                    </p>
                    <button className="hero-button">Reserve a Table</button>
                </div>
                <div className="hero-image">
                    <img src={restaurantImage} alt="Restaurant Image" height="350" width="500"/>
                </div>
            </div>
            <div className="specials">
                <h2 className="specials-title">Specials</h2>
            </div>
            <div className="testimonials">
                <h2 className="testimonials-title">Testimonials</h2>
            </div>
            <div className="about">
                <h2 className="about-title">About</h2>
            </div>
        </div>
    )

}

export default Main;