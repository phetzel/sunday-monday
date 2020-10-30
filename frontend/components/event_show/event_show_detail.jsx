import React from 'react';

import timeUtil from '../../util/time_util';

const EventShowDetail = ({ event }) => {
    const description = event.description.split('***');
    const displayTime = timeUtil.displayTime(event.datetime);
    
    return (
        <div className="event-show-details">
            <h4 className="p-color">{event.title}</h4>
            <h6>{displayTime}</h6>
            {
                description.map((desc, idx) => (
                    <span key={idx}>
                        <p>{desc}</p>
                        <br />
                    </span>
                ))
            }
        </div>
    )
}

export default EventShowDetail;