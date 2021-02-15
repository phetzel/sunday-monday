import React from 'react';
import { withRouter } from 'react-router-dom';

import VideoIndexItemn from '../video_index/video_index_item';

const ArtistShowVideo = ({ artist_id, history, videos }) => {

    const handleClick = () => {
        history.push(`/artists/${artist_id}/videos`);
    }

    // const revVideos = videos.reverse();
    const newVideos = videos.slice(0,3);

    return (
        <div>
            <h1>VIDEOS</h1>

            <ul>
                {newVideos.map((video, idx) => (
                    <VideoIndexItemn
                        key={idx} 
                        video={video}
                    />
                ))}
            </ul>
            
            <div className="artist-show-button" onClick={handleClick}>
                <h6>VIEW ALL VIDEOS</h6>               
            </div>
        </div>
    )
}

export default withRouter(ArtistShowVideo);