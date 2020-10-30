import React from 'react';

import EventShowArtists from './event_show_artists';
import timeUtil from '../../util/time_util';

const EventShowDetail = ({ event }) => {
    const description = event.description.split('***');
    const displayTime = timeUtil.displayTime(event.datetime);

    
    return (
        <div className="event-show-details">
            <div className="event-show-details-header">
                <h4 className="p-color">{event.title}</h4>
                <h6>{displayTime}</h6>
            </div>
            {
                description.map((desc, idx) => (
                    <span key={idx}>
                        <p>{desc}</p>
                    </span>
                ))
            }
            {event.artists.length > 0 &&
                <EventShowArtists artists={event.artists} />
            }
        </div>
    )
}

export default EventShowDetail;