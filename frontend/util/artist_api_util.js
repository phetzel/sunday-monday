const createArtist = artist => (
    $.ajax({
        method: 'POST',
        url: 'api/artists',
        data: artist,
        processData: false,
        contentType: false,
    })
)

const fetchArtist = id => (
    $.ajax({
        method: 'GET',
        url: `api/artists/${id}`
    })
)

const fetchArtists = data => (
    $.ajax({
        method: 'GET',
        url: 'api/artists',
        data
    })
);

const updateArtist = (data, id) => (
    $.ajax({
        method: 'PATCH',
        url: `api/artists/${id}`,
        data,
        processData: false,
        contentType: false,
    })
)

const deleteArtist = id => {
    return $.ajax({
        url: `/api/artists/${id}`,
        method: 'DELETE'
    });
}

export default {
    createArtist,
    fetchArtist,
    fetchArtists,
    updateArtist,
    deleteArtist
}