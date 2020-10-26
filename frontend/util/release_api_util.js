const createRelease = release => (
    $.ajax({
        method: 'POST',
        url: 'api/releases',
        data: release,
        processData: false,
        contentType: false,
    })
)

const fetchRelease = id => (
    $.ajax({
        method: 'GET',
        url: `api/releases/${id}`
    })
)

const fetchReleases = (data) => (
    $.ajax({
        method: 'GET',
        url: 'api/releases',
        data
    })
);

const deleteRelease = id => {
    return $.ajax({
        url: `/api/releases/${id}`,
        method: 'DELETE'
    });
}

export default {
    createRelease,
    fetchRelease,
    fetchReleases,
    deleteRelease
}