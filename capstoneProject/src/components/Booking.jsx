import React, { useState } from "react";
import Bookings from "./Bookings";



function Booking() {
    const [formData, setFormData] = useState({
        date: "",
        time: "5:00 PM",
        guests: 1,
        occasion: "Birthday"
    });

    return (
        <div className="bookings-wrapper">
            <h1 className="Reservation-title">Make A Reservation</h1>
            <Bookings className="bookings" formData={formData} setFormData={setFormData}/>
        </div>
    );
}

export default Booking;