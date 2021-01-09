const createEmail = email => (
    $.ajax({
        method: 'POST',
        url: 'api/emails',
        data: email
    })
)

const deleteEmail = id => {
    return $.ajax({
        url: `/api/emails/${id}`,
        method: 'DELETE'
    });
}

export default {
    createEmail,
    deleteEmail
}