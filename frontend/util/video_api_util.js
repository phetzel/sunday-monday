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
    deleteVideo
}