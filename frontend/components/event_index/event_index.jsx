import React, { useEffect, useState } from 'react';

import BottomNav from '../navBar/bottom_nav';
import eventApi from '../../util/event_api_util';
import EventIndexItem from './event_index_item';

const EventIndex = () => {
    const [events, setEvents] = useState();

    const fetchEvents = (val) => {
        const when = {data: val};
        eventApi.fetchEvents(when).then(events => {
            const eventsArray = Object.values(events);
            setEvents(eventsArray);
        })
    }

    const handleClick = val => {
        fetchEvents(val);
    }

    useEffect(() => {
        fetchEvents('future');
    }, []);



    return (
        <div className="event-index-container">
            <BottomNav />

            <div className="event-index-controller-container">
                <div className="event-index-controller">
                    <button 
                        className="button"
                        onClick={() => handleClick('future')}>Future Shows</button>
                    <button 
                        className="button"
                        onClick={() => handleClick('past')}>Past Shows</button>
                </div>
            </div>

            <ul>
                {events &&
                    events.map(event => <EventIndexItem key={event.id} event={event}/>)
                }
            </ul>
        </div>
    )
}

export default EventIndex;