import React from 'react';
import { withRouter } from 'react-router-dom';

const VideoListItem = ({video, history}) => {
    const handleClick = () => {
        history.push(`/videos/${video.id}`);
    }

    return (
        <div className="list-item">
            <img src={`https://img.youtube.com/vi/${video.url}/hqdefault.jpg`} alt=""/>
            <div className="list-item-bottom">
                <h4>{video.title}</h4>
                <a onClick={handleClick}>WATCH</a>
            </div>
        </div>
    )
}

export default withRouter(VideoListItem);