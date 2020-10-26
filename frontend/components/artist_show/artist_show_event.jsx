import React from 'react';
import { withRouter } from 'react-router-dom';

const EventShowMusic = ({ history, events }) => {

    const handleClick = (id) => {
        history.push(`/events/${id}`);
    }

    return (
        <div className="artist-show-event">
            <h2 className="p-color">Upcoming Events</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id} onClick={() => handleClick(event.id)}>
                        <p>{event.title}</p>
                        <p>{event.datetime}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default withRouter(EventShowMusic);