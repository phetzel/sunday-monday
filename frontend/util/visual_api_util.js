const createVisual = visual => (
    $.ajax({
        method: 'POST',
        url: 'api/visuals',
        data: visual,
        processData: false,
        contentType: false,
    })
)

const fetchVisual = id => (
    $.ajax({
        method: 'GET',
        url: `api/visuals/${id}`
    })
)

const fetchVisuals = () => (
    $.ajax({
        method: 'GET',
        url: 'api/visuals'
    })
);

const deleteVisual = id => {
    return $.ajax({
        url: `/api/visuals/${id}`,
        method: 'DELETE'
    });
}

export default {
    createVisual,
    fetchVisual,
    fetchVisuals,
    deleteVisual
}