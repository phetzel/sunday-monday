import React from 'react';

const EventShowDetail = ({ event }) => {
    const description = event.description.split('***');

    return (
        <div className="event-show-details">
            <h4 className="p-color">{event.title}</h4>
            <h6>{event.datetime}</h6>
            {
                description.map(desc => (
                    <span>
                        <p>{desc}</p>
                        <br />
                    </span>
                ))
            }
        </div>
    )
}

export default EventShowDetail;