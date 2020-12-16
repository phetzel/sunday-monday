import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import VideoIndexItem from './video_index_item';

const VideoIndex = ({ feature, title, videos}) => {

    return (
        <div className="video-index-outter-container">
            <div className="video-index-container">

                <div className="header-container">
                    <div className="header">
                        <h1><span>{title}</span></h1>
                    </div>
                </div>

                <div className="header-rect" />

                { feature &&
                    <div className="video-index-featured">
                        <ReactPlayer 
                            height="480px"
                            width="854px"
                            url={`https://www.youtube.com/watch?v=${feature.url}`} />
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