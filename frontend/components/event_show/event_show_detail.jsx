import React from 'react';

import EventShowArtists from './event_show_artists';
import timeUtil from '../../util/time_util';

const EventShowDetail = ({ event }) => {
    // const displayTime = timeUtil.displayTime(event.datetime);

    return (
        <div className="event-show-details">
            <div className="event-show-details-row">
                <h6>ADDRESS:</h6>
                <p>{event.address}</p>
            </div>
            <div className="event-show-details-row">
                <h6>DATE:</h6>
                <p>{timeUtil.displayDate(event.datetime)}</p>
            </div>
            <div className="event-show-details-row">
                <h6>TIME:</h6>
                <p>{timeUtil.displayTime(event.datetime)}</p>
            </div>
            <div className="event-show-details-row">
                <h6>DESCRIPTION:</h6>
                <p>{event.description}</p>
            </div>

            {/* {event.artists.length > 0 &&
                <EventShowArtists artists={event.artists} />
            } */}
        </div>
    )
}

export default EventShowDetail;