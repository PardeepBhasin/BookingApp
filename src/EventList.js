import React from 'react';
import './App.css';

const EventList = () => {
    return (
        <div className ="eventWrapper">
            <div className="eventTitle">Events</div>
            <div className="eventList">
                <div className="eventItem">Event 1</div>
                <div className="eventItem">Event 2</div>
            </div>
        </div>
    )
}

export default EventList;