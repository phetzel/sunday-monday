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

const fetchEvents = (data) => (
    $.ajax({
        method: 'GET',
        url: 'api/events',
        data
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