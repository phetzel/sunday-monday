import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import MusicContext from '../../context/music_context';
import videoApi from '../../util/video_api_util';
import VideoShowArtists from './video_show_artists';

const VideoShow = ({ match}) => {
    const [video, setVideo] = useState();
    const { playing, setPlaying } = useContext(MusicContext);

    const fetchVideo = () => {
        const id = match.params.id;
        videoApi.fetchVideo(id).then(video => {
            setVideo(video);
        })
    }

    const pauseMusic = () => {
        setPlaying(false);
    }

    useEffect(() => {
        fetchVideo();
    }, []);
    

    return(
        <div className="video-show-container"> 
            <div className="header-rect" />
            
            {video && 
                <div className="video-show">
                        <ReactPlayer 
                            onPlay={pauseMusic}
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
    )
}

export default VideoShow;