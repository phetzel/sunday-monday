const createItem = item => (
    $.ajax({
        method: 'POST',
        url: 'api/items',
        data: { item }
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

export default {
    createItem,
    fetchItem,
    fetchItems
}