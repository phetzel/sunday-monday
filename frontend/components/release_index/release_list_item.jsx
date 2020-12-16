import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

import youtubeApi from '../../util/youtube_util';

const ReleaseListItem = ({release, history, music, setMusic}) => {
    const handleClick = () => {
        history.push(`/music/${release.id}`);
    }

    const playRelease = () => {
        youtubeApi.fetchYoutubePlaylist(release.audio)
            .then(res => {
                const newMusic =  res.concat(music);
                setMusic(newMusic);
            });
    } 

    const queueRelease = () => {
        youtubeApi.fetchYoutubePlaylist(release.audio)
            .then(res => {
                const newMusic =  music.concat(res);
                setMusic(newMusic);
            });
    } 

    return (
        <div className="release-list-item">
            <img 
                alt={release.title}
                onClick={handleClick}
                src={release.photoUrl} 
                title={release.title}/>
            <div className="release-list-item-bottom">
                <h6>{release.title}</h6>
                <div className="artist-show-music-bottom-icon-container">
                    <FontAwesomeIcon 
                        className="artist-show-music-bottom-icon"
                        icon={faPlay} 
                        onClick={playRelease}/>
                    <FontAwesomeIcon 
                        className="artist-show-music-bottom-icon"
                        icon={faPlus}
                        onClick={queueRelease}/>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ReleaseListItem);
