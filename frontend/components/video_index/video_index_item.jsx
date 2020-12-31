import React from 'react';
import { withRouter } from 'react-router-dom';

const VideoListItem = ({video, history}) => {
    const handleClick = () => {
        history.push(`/videos/${video.id}`);
    }

    return (
        <div className="video-list-item" onClick={handleClick}>
            <img src={`https://img.youtube.com/vi/${video.url}/hqdefault.jpg`} alt=""/>
            <div className="visual-list-item-bottom">
                <h6>{video.title}</h6>
            </div>
        </div>
    )
}

export default withRouter(VideoListItem);