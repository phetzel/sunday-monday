import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import eventApi from '../../util/event_api_util';

const SplashEvent = ({history}) => {
    const [event, setEvent] = useState();

    const fetchEvent = () => {
        eventApi.fetchEvent().then(event => {
            setEvent(event);
        })
    }

    useEffect(() => {
        fetchEvent();
    }, []);
    
    const handleClick = () => {
        history.push(`/events/${event.id}`)
    }

    return (
        <div className="splash-subcontainer">
            {event && 
                <div className="splash-content"  onClick={handleClick}>          
                    <h1 className="p-color">Next Event</h1>
                    <div className="splash-content-details">
                        <h5>{event.address}</h5>
                        <img src={event.photoUrl} />
                    </div>
                </div>
            }
        </div>
    )
}

export default withRouter(SplashEvent);