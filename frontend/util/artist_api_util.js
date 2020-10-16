const createArtist = artist => (
    $.ajax({
        methos: 'POST',
        url: 'api/artists',
        data: { artist }
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

export default {
    createArtist,
    fetchArtist,
    fetchArtists
}