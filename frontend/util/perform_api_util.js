const createPerform = perform => (
    $.ajax({
        method: 'POST',
        url: 'api/performs',
        data: { perform }
    })
)

const deletePerform = id => {
    return $.ajax({
        url: `/api/performs/${id}`,
        method: 'DELETE'
    });
}

export default {
    createPerform,
    deletePerform
}