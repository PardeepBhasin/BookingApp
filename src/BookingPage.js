import React from 'react';
import './App.css';
import history from './history';

const BookingPage = () => {
    return (
        <div className="bookingWrapper">
            <div className="bookingContent">Date</div>
            <div className="bookingContent">Available Show Timings</div>
            <div className="bookingContent">Choose Number of Seats</div>
            <div className="bookingContent"><button className="btn" onClick={() => history.push('/generateQRCode')}>Book</button></div>
            
        </div>
    )
}

export default BookingPage;