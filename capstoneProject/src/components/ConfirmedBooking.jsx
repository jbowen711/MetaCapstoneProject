import React from "react";
import { useLocation } from 'react-router-dom'

function ConfirmedBooking() {

    const location = useLocation();
    const { date, time, guests, occasion } = location.state || {};
    return (
        <>
            <h1>Cofirmed Booking</h1>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Guests: {guests}</p>
            <p>Occasion: {occasion}</p>
        </>
    );
}


export default ConfirmedBooking;