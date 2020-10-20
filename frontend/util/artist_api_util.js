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

const fetchArtists = () => (
    $.ajax({
        method: 'GET',
        url: 'api/artists'
    })
);

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
    deleteArtist
}