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
        <div className="splash-subcontainer">
            {event && 
                <div className="splash-content" >   
                    <div className="splash-content-header">
                        <h1 className="p-color">Next Event</h1>
                        <h5>{event.title}</h5>
                    </div>       
                    <div className="splash-content-details">
                        <img src={event.photoUrl} onClick={handleClick}/>
                        <div className="splash-content-details-text">
                            
                            <h5>{event.address}</h5>
                            <h5>{display}</h5>
                        </div>
                        
                    </div>
                </div>
            }
        </div>
    )
}

export default withRouter(SplashEvent);