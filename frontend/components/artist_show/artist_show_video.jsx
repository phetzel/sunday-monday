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
        <div className="artist-show-video">
            <h2 className="p-color">Videos</h2>

            <div className="artist-video-featured">
                <ReactPlayer url={`https://www.youtube.com/watch?v=${feature.url}`} />
                <h4>{feature.title}</h4>
            </div>

            <ul>
                {revVideos.map(video => (
                    <li key={video.id} onClick={() => handleClick(video.id)}>
                        <img src={`https://img.youtube.com/vi/${video.url}/hqdefault.jpg`} alt=""/>
                        <p>{video.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default withRouter(ArtistShowVideo);