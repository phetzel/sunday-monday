import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import videoApi from '../../util/video_api_util';
import VideoIndex from './video_index';

const AllVideosIndex = props => {
    const [feature, setFeature] = useState();
    const [videos, setVideos] = useState();

    const fetchVideos = () => {
        videoApi.fetchVideos().then(videos => {
            const videosArray = Object.values(videos);
            const first = videosArray.shift();
            setFeature(first);
            setVideos(videosArray);
        })
    }

    useEffect(() => {
        fetchVideos();
    }, []);

    return (
        <div>
            <VideoIndex 
                feature={feature} 
                title={"All Videos"}
                videos={videos} />
        </div>
    )
}

export default AllVideosIndex;