import React from "react";
import './Main.css';
import daniel from '../assets/people_assets/Daniel.jpg';
import jake from '../assets/people_assets/jake.jpg';
import nina from '../assets/people_assets/nina.jpg';
import sarah from '../assets/people_assets/sarah.jpg';

function Testimonials() {
    const peopleCards = [{
        name: "Daniel",
        image: daniel,
        testimonial: "Love this restaurant!",
    }, {
        name: "Jake",
        image: jake,
        testimonial: "Went on a first date here. The person I took is now my girlfriend!"
    }, {
        name: "Nina",
        image: nina,
        testimonial: "Food was delivered on time and prompty! We will be back soon."
    }, {
        name: "Sarah",
        image: sarah,
        testimonial: "10/10"
    },
    ]

    return (
        <div className="testimonial-section">
            <h1 className="testimonial-title">Testimonials</h1>
            <div className="testimonial-grid">
                {peopleCards.map((peopleCards, index) => (
                    <div className="testimonial-card" key={index}>
                        <img src={peopleCards.image} alt={peopleCards.title} className="testimonial-image"/>
                        <h1 className="testimonial-name">{peopleCards.name}</h1>
                        <p className="testimonial-description">{peopleCards.testimonial}</p>
                    </div>
                )
                )}

            </div>
        </div>
    );
}

export default Testimonials;