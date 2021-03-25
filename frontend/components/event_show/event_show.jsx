import React, { useEffect, useState } from 'react';

import eventApi from '../../util/event_api_util';
import EventShowDetail from './event_show_detail';
import Map from './map';


const EventShow = ({ match}) => {
    const [event, setEvent] = useState();

    const fetchEvent = () => {
        const id = match.params.id;
        eventApi.fetchEvent(id).then(event => {
            setEvent(event);
        })
    }

    useEffect(() => {
        fetchEvent();
    }, []);

    console.log(event);

    return(
        <div className="content-container">
            <div className="content">
                {event && 
                <div>
                    <div className="header-container">
                        <div className="header">
                            <h1><span>{event.title}</span></h1>
                        </div>
                    </div>

                    <div className="header-rect" />


                    <div className="event-show">
                        {/* <img src={event.photoUrl} alt="dj pic"/> */}
                        <EventShowDetail event={event}/>
                        <Map event={event} />
                    </div>

                </div>
                }
            </div>
        </div>

    )
}

export default EventShow;