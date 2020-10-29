const createAppearance = appearance => (
    $.ajax({
        method: 'POST',
        url: 'api/appearances',
        data: { appearance }
    })
)

const deleteAppearance = id => {
    return $.ajax({
        url: `/api/appearances/${id}`,
        method: 'DELETE'
    });
}

export default {
    createAppearance,
    deleteAppearance
}