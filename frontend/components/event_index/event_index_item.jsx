import React from 'react';
import { withRouter } from 'react-router-dom';

import timeUtil from '../../util/time_util';

const EventIndexItem = ({event, history}) => {
    const displayTime = timeUtil.displayTime(event.datetime);

    const handleClick = () => {
        history.push(`/events/${event.id}`);
    }

    return (
        <li className="event-index-item" onClick={handleClick}>
            <img src={event.photoUrl} alt=""/>

            <div className="event-index-item-text">
                <h3 className="p-color">{event.title}</h3>
                <p>{displayTime}</p>
                <p>{event.address}</p>
            </div>
        </li>
    )
}

export default withRouter(EventIndexItem);