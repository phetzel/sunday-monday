const createPainter = painter => (
    $.ajax({
        method: 'POST',
        url: 'api/painters',
        data: { painter }
    })
)

const deletePainter = id => {
    return $.ajax({
        url: `/api/painters/${id}`,
        method: 'DELETE'
    });
}

export default {
    createPainter,
    deletePainter
}