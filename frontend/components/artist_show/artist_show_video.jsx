import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy';

const ArtistShowVideo = ({ history, videos }) => {

    const handleClick = (id) => {
        history.push(`/videos/${id}`);
    }

    const revVideos = videos.reverse();
    const feature = revVideos.shift();

    return (
        <div className="artist-show-video-container">
            <h1>Videos</h1>
            <div className="artist-show-video">
                <div className="artist-show-video-player">
                    <ReactPlayer 
                        height="480px"
                        width="854px"
                        url={`https://www.youtube.com/watch?v=${feature.url}`} />
                </div>
            </div>

            <div class="artist-show-videos-button-container">
                <div class="artist-show-videos-button">
                    <div class="artist-show-videos-button-content">View All Videos</div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ArtistShowVideo);