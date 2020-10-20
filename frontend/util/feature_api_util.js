const createFeature = feature => (
    $.ajax({
        method: 'POST',
        url: 'api/features',
        data: { feature }
    })
)

const deleteFeature = id => {
    return $.ajax({
        url: `/api/features/${id}`,
        method: 'DELETE'
    });
}

export default {
    createFeature,
    deleteFeature
}