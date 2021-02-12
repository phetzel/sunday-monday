import React, { useEffect, useState } from 'react';

import eventApi from '../../util/event_api_util';
import EventIndexItem from './event_index_item';

const EventIndex = () => {
    const [events, setEvents] = useState();

    const fetchEvents = () => {
        eventApi.fetchEvents().then(events => {
            const eventsArray = Object.values(events);
            setEvents(eventsArray);
            console.log(events);
        })
    }

    useEffect(() => {
        fetchEvents();
    }, []);


    return (
        <div className="content-container">
            <div className="content">
                <div className="header-container">
                    <div className="header">
                        <h1><span>EVENTS</span></h1>
                    </div>
                </div>

                <div className="header-rect" />


                <ul className="event-index">
                    {events &&
                        events.map(event => <EventIndexItem key={event.id} event={event}/>)
                    }
                </ul>

            </div>
        </div>
    )
}

export default EventIndex;