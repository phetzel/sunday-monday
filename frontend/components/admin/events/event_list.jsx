import React, { useState, useEffect } from 'react';

import eventApi from '../../../util/event_api_util';

const EventList = () => {
    const [events, setEvents] = useState();


    const fetchEvents = () => {
        eventApi.fetchEvents().then(events => {
            const eventsArray = Object.values(events);
            setEvents(Array.from(eventsArray));
        })
    }

    const deleteEvent = (id) => {
        eventApi.deleteEvent(id).then(events => {
            const eventsArray = Object.values(events);
            setEvents(Array.from(eventsArray));
        });
    }

    const handleClick = (event) => {
        setEvent(event);
    }

    useEffect(() => {
        fetchEvents();
    }, []);


    return (
        <div className="admin-list">
            <h2>Edit Events</h2>
            <ul>
                { events &&
                    events.map(event => (
                    <li key={event.id} onClick={() => console.log(event)}>
                        <p>{event.title}</p>
                        <i onClick={() => deleteEvent(event.id)}>&#128465;</i>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EventList;