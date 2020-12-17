import React, { useState } from 'react';

import EventForm from './event_form';
import EventList from './event_list';

const Events = () => {
    return (
        <div className="admin">
            <EventForm />
            <EventList />
        </div>
    )
}

export default Events;