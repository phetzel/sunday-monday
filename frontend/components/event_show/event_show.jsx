import React, { useEffect, useState } from 'react';

import BottomNav from '../navBar/bottom_nav';
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

    return(
        <div>
            <BottomNav />
            <div className="event-show-container content">
                {event && 
                <div className="event-show">
                    <img src={event.photoUrl} alt="dj pic"/>
                    <EventShowDetail event={event}/>
                    <Map event={event} />
                </div>
                }
            </div>
        </div>
    )
}

export default EventShow;