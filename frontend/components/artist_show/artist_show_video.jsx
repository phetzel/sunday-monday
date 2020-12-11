import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy';

const ArtistShowVideo = ({ artist_id, history, videos }) => {

    const handleClick = () => {
        history.push(`/artists/${artist_id}/videos`);
    }

    const revVideos = videos.reverse();
    const feature = revVideos.shift();

    return (
        <div className="artist-show-video-container">
            <h1>Newest Video</h1>
            <div className="show-video">
                <div className="show-video-player">
                    <ReactPlayer 
                        height="480px"
                        width="854px"
                        url={`https://www.youtube.com/watch?v=${feature.url}`} />
                </div>
            </div>

            <div 
                className="artist-show-videos-button-container"
                onClick={handleClick}>
                <div className="artist-show-videos-button">
                    <div className="artist-show-videos-button-content">View All Videos</div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ArtistShowVideo);