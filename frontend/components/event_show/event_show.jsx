import React, { useEffect, useState } from 'react';

import BottomNav from '../navBar/bottom_nav';
import eventApi from '../../util/event_api_util';
import EventShowDetail from './event_show_detail';


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
            <div className="event-show content">
                {event && <EventShowDetail event={event}/>}
            </div>
        </div>
    )
}

export default EventShow;