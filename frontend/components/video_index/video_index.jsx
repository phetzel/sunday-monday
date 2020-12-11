import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import VideoIndexItem from './video_index_item';

const VideoIndex = ({ feature, title, videos}) => {

    return (
        <div className="video-index-container">
            <div className="video-index">

                <h1>{title}</h1>
                { feature &&
                    <div className="show-video-container">
                        <div className="show-video">
                            <ReactPlayer 
                                height="480px"
                                width="854px"
                                url={`https://www.youtube.com/watch?v=${feature.url}`} />
                        </div>
                    </div>
                }
                <ul className="video-index-list">
                    {videos && videos.map(video => 
                        <VideoIndexItem video={video} key={video.id} />)}
                </ul>
            </div>
        </div>
    )
}

export default VideoIndex;