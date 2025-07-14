import Booking from "./Booking";
import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from '../apis/fetchingTimes';

const initialTimes = () => {
  const today = new Date();
  return fetchAPI(today);
}

const updateTimes = (state, date) => {
  return fetchAPI(new Date(date));
};

function BookingPage() {

    const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes());

    return (
        <div className="bookings-page">
            <Booking availableTimes={availableTimes} dispatch={dispatch}/>
        </div>
    );
}

export default BookingPage;