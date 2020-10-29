import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import BottomNav from '../navBar/bottom_nav';
import videoApi from '../../util/video_api_util';
import VideoIndexItem from './video_index_item';

const VideoIndex = props => {
    const [feature, setFeature] = useState();
    const [videos, setVideos] = useState();


    const fetchVideos = () => {
        videoApi.fetchVideos().then(videos => {
            console.log(videos);
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
            <BottomNav />
            <div className="video-index-container content">
                { feature &&
                    <div className="video-index-featured">
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${feature.url}`} />
                        <h4>{feature.title}</h4>
                    </div>
                }
                <ul className="video-index">
                    {videos && videos.map(video => 
                        <VideoIndexItem video={video} key={video.id} />)}
                </ul>
            </div>
        </div>
    )
}

export default VideoIndex;