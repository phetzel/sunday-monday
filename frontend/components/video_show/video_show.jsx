import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import videoApi from '../../util/video_api_util';
import VideoShowArtists from './video_show_artists';

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
        <div className="video-show"> 
            <div className="show-video-container">
                {video && 
                    <div className="show-video">
                            <ReactPlayer 
                                height="480px"
                                width="854px"
                                url={`https://www.youtube.com/watch?v=${video.url}`} />
                    </div>
                }
                {/* {video && video.artists.length > 0 &&
                    <div className="artist-association-container">
                        <VideoShowArtists artists={video.artists} />
                    </div>
                } */}
            </div>
        </div>
    )
}

export default VideoShow;