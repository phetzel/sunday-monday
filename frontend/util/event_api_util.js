const createEvent = event => (
    $.ajax({
        method: 'POST',
        url: 'api/events',
        data: event,
        processData: false,
        contentType: false,
    })
)

const fetchEvent = id => (
    $.ajax({
        method: 'GET',
        url: `api/events/${id}`
    })
)

const fetchEvents = () => (
    $.ajax({
        method: 'GET',
        url: 'api/events'
    })
);

const deleteEvent = id => {
    return $.ajax({
        url: `/api/events/${id}`,
        method: 'DELETE'
    });
}

export default {
    createEvent,
    fetchEvent,
    fetchEvents,
    deleteEvent
}