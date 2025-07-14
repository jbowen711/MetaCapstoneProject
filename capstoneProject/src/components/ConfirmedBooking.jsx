import React from "react";
import { useLocation } from 'react-router-dom'
import './Reservation.css'

function ConfirmedBooking() {

    const location = useLocation();
    const { date, time, guests, occasion } = location.state || {};
    return (
        <>
            <h1 className="confirmedBooking">Booking Confirmed</h1>
            <div className="confirmation-details">
                <p className="date">Date: {date}</p>
                <p className="time">Time: {time}</p>
                <p className="guests">Guests: {guests}</p>
                <p className="occasion">Occasion: {occasion}</p>
            </div>
        </>
    );
}


export default ConfirmedBooking;