import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import eventApi from '../../util/event_api_util';
import timeUtil from '../../util/time_util';


const SplashEvent = ({history}) => {
    const [event, setEvent] = useState();
    const [display, setDisplay] = useState();

    const fetchEvent = () => {
        eventApi.fetchEvent().then(event => {
            // displayTime(event);
            setEvent(event);
        })
    }

    useEffect(() => {
        fetchEvent();
    }, []);
    
    const handleClick = () => {
        history.push(`/events/${event.id}`)
    }

    // const displayTime = event => {
    //     const eventTime = timeUtil.displayTime(event.datetime);
    //     setDisplay(eventTime);
    // }

    const handleArtistClick = (id) => {
        history.push(`/artists/${id}`);
    }


    return (
        <div className="inline">
            { event && 
                <div className="list-item">
                    <img 
                        alt={event.title}
                        src={event.photoUrl} 
                        title={event.title}/>
                    <div className="list-item-bottom">
                        <div>
                            <h4>{event.title}</h4>
                            <ul className="list-item-bottom-mid">
                                {
                                    event.artists.map((artist, idx) => (
                                        <li 
                                            onClick={() => handleArtistClick(artist.id)}
                                            key={idx}>
                                            {artist.name}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <a onClick={handleClick}>VIEW EVENT</a>
                    </div>
                </div>  
            }
        </div>
    )
}

export default withRouter(SplashEvent);