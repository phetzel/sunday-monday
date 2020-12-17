import React, { useState, useEffect } from 'react';

import videoApi from '../../../util/video_api_util';

const VideoList = ({ setVideo }) => {
    const [videos, setVideos] = useState();

    const fetchVideos = () => {
        videoApi.fetchVideos().then(videos => {
            const videosArray = Object.values(videos);
            setVideos(Array.from(videosArray));
        })
    }

    const deleteVideo = (id) => {
        videoApi.deleteVideo(id).then(videos => {
            const videosArray = Object.values(videos);
            setVideos(Array.from(videosArray));
        });
    }

    const handleClick = (video) => {
        setVideo(video);
    }

    useEffect(() => {
        fetchVideos();
    }, []);

    return (
        <div className="admin-list">
            <h2>Edit Videos</h2>
            <ul>
                { videos &&
                    videos.map(video => (
                    <li key={video.id} onClick={() => handleClick(video)}>
                        <p>{video.title}</p>
                        <i onClick={() => deleteVideo(video.id)}>&#128465;</i>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default VideoList;