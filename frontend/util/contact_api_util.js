const createContact = contact => (
    $.ajax({
        method: 'POST',
        url: 'api/contacts',
        data: contact
    })
)

export default { createContact };