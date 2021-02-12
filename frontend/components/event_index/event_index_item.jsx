import React from 'react';
import { withRouter } from 'react-router-dom';

import timeUtil from '../../util/time_util';

const EventIndexItem = ({event, history}) => {
    const handleClick = () => {
        // history.push(`/events/${event.id}`);
    }

    // const { day, month, year } = timeUtil.displayEventIndex(event.dateTime);

    // console.log(day);
    // console.log(month);
    // console.log(year);

    const displayTime = timeUtil.displayEventIndex(event.datetime);
    console.log(event);

    return (
        <li className="event-index-item" onClick={handleClick}>
            <div className="event-index-item-date">
                <h3>{displayTime["day"]}</h3>
                <h3>{displayTime["month"]}</h3>
                <h3 id="event-index-year">{displayTime["year"]}</h3>
            </div>
            
            <img src={event.photoUrl} alt=""/>

            <div className="event-index-item-details">
                <h3>{event.title}</h3>
            </div>

            <div className="event-index-item-location">
                <h6>{event.address}</h6>
            </div>
        </li>
    )
}

export default withRouter(EventIndexItem);