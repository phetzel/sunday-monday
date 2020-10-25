import React from 'react';

import EventForm from './event_form';
import EventList from './event_list';

const Events = () => (
    <div className="admin-event">
        <EventForm />
        <EventList />
    </div>
)

export default Events;