import React, { useEffect, useState } from 'react';

import eventApi from '../../util/event_api_util';
import EventIndexItem from './event_index_item';

const EventIndex = () => {
    const [events, setEvents] = useState();
    const [empty, setEmpty] = useState(false);

    const fetchEvents = () => {
        eventApi.fetchEvents().then(events => {
            const eventsArray = Object.values(events);
            if (eventsArray.length < 1) setEmpty(true);
            setEvents(eventsArray);    
        })
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    const display = empty ? (
        <div className="event-index-empty">
            <h6>No Upcoming Events. Check Back Soon!</h6>
        </div>
    ) : (
        <ul className="event-index">
            {events &&
                events.map(event => <EventIndexItem key={event.id} event={event}/>)
            }
        </ul>
    )

    return (
        <div className="content-container">
            <div className="content">
                <div className="header-container">
                    <div className="header">
                        <h1><span>EVENTS</span></h1>
                    </div>
                </div>

                <div className="header-rect" />

                {display}

            </div>
        </div>
    )
}

export default EventIndex;