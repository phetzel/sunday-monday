import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

import ReleaseListItem from '../release_index/release_list_item';

const ArtistShowMusic = ({ artist_id, history, music, setMusic, releases }) => {

    const handleClick = (id) => {
        history.push(`/music/${id}`);
    }

    const handleAllClick = () => {
        history.push(`/artists/${artist_id}/music`)
    }

    const newMusic = releases.slice(0,6);

    return (
        <div className="artist-show-music-container">
            <h1>New Music</h1>
            <ul>
                {newMusic.map(release => (
                    <ReleaseListItem 
                        release={release}
                        music={music}
                        setMusic={setMusic}
                    />
                ))}
            </ul>

            <div 
                className="artist-show-music-all-container"
                onClick={handleAllClick}>
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