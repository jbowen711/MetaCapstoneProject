import React from "react";
import greekSalad from '../assets/icons_assets/greeksalad.jpg';
import lemonDessert from '../assets/icons_assets/lemondessert.jpg';
import bruchetta from '../assets/icons_assets/bruchetta.svg';
import './Main.css';

function Specials() {
    const specialDishes = [{
        image: greekSalad,
        title: "Greek Salad",
        description: "A refreshing Mediterranean classic made with crisp romaine lettuce, juicy tomatoes, cucumbers, red onions, Kalamata olives, and tangy feta cheese. Tossed in a light lemon-oregano vinaigrette and finished with a sprinkle of sea salt and cracked black pepper.",
        price: "$12.99",
    }, {
        image: lemonDessert,
        title: "Lemon Dessert",
        description: "A delightful dessert that combines the zesty flavor of fresh lemons with a creamy, smooth texture. This dish is a perfect balance of sweet and tart, served chilled for a refreshing finish to any meal.",
        price: "$7.99",
    }, {
        image: bruchetta,
        title: "Bruchetta",
        description: "Toasted bread topped with fresh diced tomatoes, garlic, basil, and a drizzle of olive oil. Simple, vibrant, and delicious.",
        price: "$6.99"
    },
    ]

    return (
        <div className="specials-section">
            <h1 className="specials-title">Specials</h1>
            <div className="specials-grid">
                {specialDishes.map((dish, index) => (
                    <div className="special-card" key={index}>
                        <img src={dish.image} alt={dish.title} className="special-image"/>
                        <div className="special-info">
                            <div className="special-header">
                                <h2>{dish.title}</h2>
                                <span>{dish.price}</span>
                            </div>
                            <p>{dish.description}</p>
                            <p>Order a Delivery!</p>
                        </div>
                    </div>
                )
                )}

            </div>
        </div>
    );
}

export default Specials;