import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

const ArtistShowMusic = ({ history, releases }) => {

    const handleClick = (id) => {
        history.push(`/music/${id}`);
    }

    const newMusic = releases.slice(0,8);

    return (
        <div className="artist-show-music-container">
            <h1>New Music</h1>
            <ul>
                {newMusic.map(release => (
                    <li key={release.id} onClick={() => handleClick(release.id)}>
                        <img 
                            alt={release.title}
                            src={release.photoUrl} 
                            title={release.title} />
                        <div className="artist-show-music-bottom">
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

                    </li>
                ))}
            </ul>

            <div className="artist-show-music-all-container">
                <div className="artist-show-music-all">
                    <div className="artist-show-music-all-content">
                        View All Music
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ArtistShowMusic);