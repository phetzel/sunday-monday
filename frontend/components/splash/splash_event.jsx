import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import eventApi from '../../util/event_api_util';
import timeUtil from '../../util/time_util';

const SplashEvent = ({history}) => {
    const [event, setEvent] = useState();
    const [display, setDisplay] = useState();

    const fetchEvent = () => {
        eventApi.fetchEvent().then(event => {
            displayTime(event);
            setEvent(event);
        })
    }

    useEffect(() => {
        fetchEvent();
    }, []);
    
    const handleClick = () => {
        history.push(`/events/${event.id}`)
    }

    const displayTime = event => {
        const eventTime = timeUtil.displayTime(event.datetime);
        setDisplay(eventTime);
    }

    return (
        <div>
            {event && 
                <div className="splash-short">
                    <h5>Next Event</h5>    
                    <img src={event.photoUrl} onClick={handleClick}/>
                    <h6>{event.title}</h6>
                    <p>{event.address}</p>
                    <p>{display}</p>
                </div>
            }
        </div>
    )
}

export default withRouter(SplashEvent);