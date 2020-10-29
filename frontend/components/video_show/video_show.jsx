import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import BottomNav from '../navBar/bottom_nav';
import videoApi from '../../util/video_api_util';
// import ReleaseShowArtists from './release_show_artists';

const VideoShow = ({ match}) => {
    const [video, setVideo] = useState();

    const fetchVideo = () => {
        const id = match.params.id;
        videoApi.fetchVideo(id).then(video => {
            setVideo(video);
        })
    }

    useEffect(() => {
        fetchVideo();
    }, []);
    

    return(
        <div>
            <BottomNav />
            <div className="video-show content">
                {video && 
                    <div className="video-show-details">
                       <ReactPlayer 
                            className="video-show-details-player" 
                            url={`https://www.youtube.com/watch?v=${video.url}`} />
                       <h2 className="p-color">{video.title}</h2>
                    </div>
                }
            </div>
        </div>
    )
}

export default VideoShow;