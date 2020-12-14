import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

const ReleaseListItem = ({release, history}) => {
    const handleClick = () => {
        history.push(`/music/${release.id}`);
    }

    return (
        <div className="release-list-item" onClick={handleClick}>
            <img alt={release.title} src={release.photoUrl} title={release.title}/>
            <div className="release-list-item-bottom">
                <h6>{release.title}</h6>
                <div className="artist-show-music-bottom-icon-container">
                    <FontAwesomeIcon 
                        className="artist-show-music-bottom-icon"
                        icon={faPlay} />
                    <FontAwesomeIcon 
                        className="artist-show-music-bottom-icon"
                        icon={faPlus} />
                </div>
            </div>
        </div>
    )
}

export default withRouter(ReleaseListItem);
