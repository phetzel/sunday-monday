const createRelease = release => (
    $.ajax({
        method: 'POST',
        url: 'api/releases',
        data: { release }
    })
)

const fetchRelease = id => (
    $.ajax({
        method: 'GET',
        url: `api/releases/${id}`
    })
)

const fetchReleases = () => (
    $.ajax({
        method: 'GET',
        url: 'api/releases'
    })
);

export default {
    createRelease,
    fetchRelease,
    fetchReleases
}