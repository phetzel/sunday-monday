const createItem = item => (
    $.ajax({
        method: 'POST',
        url: 'api/items',
        data: item,
        processData: false,
        contentType: false,
    })
)

const fetchItem = id => (
    $.ajax({
        method: 'GET',
        url: `api/items/${id}`
    })
)

const fetchItems = data => (
    $.ajax({
        method: 'GET',
        url: 'api/items',
        data
    })
);

const deleteItem = id => {
    return $.ajax({
        url: `/api/items/${id}`,
        method: 'DELETE'
    });
}

export default {
    createItem,
    fetchItem,
    fetchItems,
    deleteItem
}