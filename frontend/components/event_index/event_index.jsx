import React, { useEffect, useState } from 'react';

import BottomNav from '../navBar/bottom_nav';
import eventApi from '../../util/event_api_util';
import EventIndexItem from './event_index_item';

const EventIndex = () => {
    const [events, setEvents] = useState();
    const [selected, setSelected] = useState();


    const fetchEvents = () => {
        eventApi.fetchEvents().then(events => {
            const eventsArray = Object.values(events);
            setEvents(eventsArray);
        })
    }

    useEffect(() => {
        fetchEvents();
    }, []);


    return (
        <div className="event-index-container">
            <BottomNav />

            <ul>
                {events &&
                    events.map(event => <EventIndexItem key={event.id} event={event}/>)
                }
            </ul>
        </div>
    )
}

export default EventIndex;