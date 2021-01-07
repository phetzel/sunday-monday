import React, { useEffect, useState } from 'react';

import eventApi from '../../util/event_api_util';
import EventIndexItem from './event_index_item';

const EventIndex = () => {
    const [events, setEvents] = useState();
    const [eventIdx, setEventIdx] = useState();

    const fetchEvents = () => {
        const now = new Date();

        eventApi.fetchEvents().then(events => {
            const eventsArray = Object.values(events);
            setEvents(eventsArray);
            events.forEach(event => {
                const eventDate = event.datetime.split('T');
                const eventDateObj = new Date()
                console.log(now);
                console.log(eventDate[0]);
                // console.log(now < event);
            })
        })
    }

    const handleClick = val => {
        fetchEvents(val);
    }

    useEffect(() => {
        fetchEvents();
    }, []);


    return (
        <div className="content-container">
            <div className="content">
                <div className="header-container">
                    <div className="header">
                        <h1><span>COMING SOON</span></h1>
                    </div>
                </div>

                <div className="header-rect" />

                {/* <div className="event-index-controller-container">
                    <div className="event-index-controller">
                        <button 
                            className="button"
                            onClick={() => handleClick('future')}>Future Shows</button>
                        <button 
                            className="button"
                            onClick={() => handleClick('past')}>Past Shows</button>
                    </div>
                </div> */}

                {/* <ul>
                    {events &&
                        events.map(event => <EventIndexItem key={event.id} event={event}/>)
                    }
                </ul> */}

            </div>
        </div>
    )
}

export default EventIndex;