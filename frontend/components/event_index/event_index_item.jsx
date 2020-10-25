import React from 'react';

import Map from './map';
import timeUtil from '../../util/time_util';

const EventIndexItem = ({event}) => {
    const mapOptions = {
        center: { lat: event.lat, lng: event.lng },
        zoom: 13
    };

    const displayTime = timeUtil.displayTime(event.datetime);

    return (
        <li className="event-index-item">
            <Map event={event} />

            <div className="event-index-item-text">
                <h3 className="p-color">{event.title}</h3>
                <p>{displayTime}</p>
                <p>{event.description}</p>
            </div>
        </li>
    )
}

export default EventIndexItem;