import React, { useContext, useState, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';

import MusicContext from '../../context/music_context';
import videoApi from '../../util/video_api_util';
import VideoIndexItem from './video_index_item';

const VideoIndex = ({ artist, title}) => {
    const { setPlaying } = useContext(MusicContext);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [more, setMore] = useState();

    const pauseMusic = () => {
        setPlaying(false);
    }

        const fetchVideos = () => {
            setLoading(true);


            if (artist) {
                if (page === 0) {
                    const videosArray = artist.videos.slice(0, 7);
                    setVideos([...videos, ...videosArray]);
                    setLoading(false);
                    videosArray.length < 7 ? setMore(false) : setMore(true);
                } else {
                    const videosArray = artist.videos.slice(page * 6 + 1, page * 6 + 7);
                    setVideos([...videos, ...videosArray]);
                    setLoading(false);
                    videosArray.length < 6 ? setMore(false) : setMore(true);
                }
            } else {
                setLoading(true);
                const obj = { page: page };
                videoApi.fetchVideos(obj).then(response => {
                    const videosArray = Object.values(response);
                    setVideos([...videos, ...videosArray]);
                    setLoading(false);
                    videosArray.length < 6 ? setMore(false) : setMore(true);
                })
            }
        }

    useEffect(() => {
        fetchVideos();
    }, [page]);

    return (
        <div className="content-container">
            <div className="content">

                <div className="header-container">
                    <div className="header">
                        <h1><span>{title}</span></h1>
                    </div>
                </div>

                <div className="header-rect" />

                { videos && videos[0] &&
                    <div className="video-index-show">
                        <ReactPlayer 
                            onPlay={pauseMusic}
                            height="100%"
                            width="100%"
                            url={`https://www.youtube.com/watch?v=${videos[0].url}`} />
                    </div>
                }

                <ul className="list">
                    {videos && videos.slice(1).map(video => 
                        <VideoIndexItem video={video} key={video.id} />)}
                </ul>

                { more && 
                    <div className="list-show-button" onClick={() => setPage(page + 1)}>
                        <h6>MORE</h6>               
                    </div>
                }
            </div>
        </div>
    )
}

export default VideoIndex;