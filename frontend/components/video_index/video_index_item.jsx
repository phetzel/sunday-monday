import React from 'react';
import { withRouter } from 'react-router-dom';

const VideoListItem = ({video, history}) => {
    const handleClick = () => {
        history.push(`/videos/${video.id}`);
    }

    return (
        <div className="video-index-item" onClick={handleClick}>
            <img src={`https://img.youtube.com/vi/${video.url}/hqdefault.jpg`} alt=""/>
            <h4>{video.title}</h4>
        </div>
    )
}

export default withRouter(VideoListItem);