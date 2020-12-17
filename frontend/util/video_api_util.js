const createVideo = video => (
    $.ajax({
        method: 'POST',
        url: 'api/videos',
        data: video,
        processData: false,
        contentType: false,
    })
)

const fetchVideo = id => (
    $.ajax({
        method: 'GET',
        url: `api/videos/${id}`
    })
)

const fetchVideos = () => (
    $.ajax({
        method: 'GET',
        url: 'api/videos'
    })
);

const updateVideo = (data, id) => (
    $.ajax({
        method: 'PATCH',
        url: `api/videos/${id}`,
        data
    })
)

const deleteVideo = id => {
    return $.ajax({
        url: `/api/videos/${id}`,
        method: 'DELETE'
    });
}

export default {
    createVideo,
    fetchVideo,
    fetchVideos,
    updateVideo,
    deleteVideo
}