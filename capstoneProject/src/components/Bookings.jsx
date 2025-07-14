import React from "react";
import { submitAPI } from "../apis/fetchingTimes";
import { useNavigate } from "react-router-dom";

function Bookings({setFormData, formData, availableTimes, dispatch}) {

    const { date, time, guests, occasion } = formData;
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        if (name == "date") {
            dispatch(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Reservation made for", date, "at", time, "for", guests, "guests on the occasion of", occasion);
        const submissions = submitAPI(formData);
        if (submissions) {
            navigate('/bookingconfirmed', {
                state: {date, time, guests, occasion}
            });
        } else {
            alert("Reservation failed. Please try again.");
        }

    };

    return (
        <div className="bookings">
            <form className="bookings-form" onSubmit={handleSubmit}>
                <label className="date"> Select Date
                <input type="date" name="date" id="res-date" value={formData.date} onChange={handleChange} required/>
                </label>
                <label className="time" htmlFor="time"> Select Time
                    <select id="res-time" name="time" value={formData.time} onChange={handleChange} required>
                        {availableTimes.map((time, i) => (
                            <option key={i} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="guests" htmlFor="guests"> Number of Guests
                    <input type="number" value={formData.guests} min="1" max="10" id="guests" name="guests" onChange={handleChange}/>
                </label>
                <label className="occasion" htmlFor="occasion"> Occasion
                        <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                </label>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Bookings;