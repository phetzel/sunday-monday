import React, { useContext } from 'react';
import ReactPlayer from 'react-player/lazy';

import MusicContext from '../../context/music_context';
import VideoIndexItem from './video_index_item';

const VideoIndex = ({ feature, title, videos}) => {
    const { setPlaying } = useContext(MusicContext);

    const pauseMusic = () => {
        setPlaying(false);
    }

    return (
        <div className="content-container">
            <div className="content">

                <div className="header-container">
                    <div className="header">
                        <h1><span>{title}</span></h1>
                    </div>
                </div>

                <div className="header-rect" />

                { feature &&
                    <div className="video-index-featured">
                        <ReactPlayer 
                            onPlay={pauseMusic}
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