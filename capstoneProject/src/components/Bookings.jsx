import React from "react";

function Bookings({setFormData, formData}) {

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Reservation made for", date, "at", time, "for", guests, "guests on the occasion of", occasion);
    };

    return (
        <div className="bookings">
            <form className="bookings-form" onSubmit={handleSubmit}>
                <label className="date"> Select Date
                <input type="date" name="date" id="res-date" value={formData.date} onChange={handleChange} required/>
                </label>
                <label className="time" htmlFor="time"> Select Time
                    <select id="res-time" name="time" value={formData.time} onChange={handleChange} required>
                        <option>5:00 PM</option>
                        <option>6:00 PM</option>
                        <option>7:00 PM</option>
                        <option>8:00 PM</option>
                        <option>9:00 PM</option>
                        <option>10:00 PM</option>
                    </select>
                </label>
                <label className="guests" htmlFor="guests"> Number of Guests
                    <input type="number" value={formData.guests} min="1" max="10" id="guests" name="guests" handleChange={handleChange}/>
                </label>
                <label className="occasion" htmlFor="occasion" value={formData.occasion}> Occasion
                        <select id="occasion">
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