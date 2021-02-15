import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

import ReleaseListItem from '../release_index/release_list_item';

const ArtistShowMusic = ({ artist_id, history, releases }) => {

    const handleClick = (id) => {
        history.push(`/music/${id}`);
    }

    const handleAllClick = () => {
        history.push(`/artists/${artist_id}/music`)
    }

    const newMusic = releases.slice(0,3);

    return (
        <div>
            <h1>MUSIC</h1>
            <ul>
                {newMusic.map(release => (
                    <ReleaseListItem 
                        release={release}
                    />
                ))}
            </ul>
            
            <div className="artist-show-button" onClick={handleAllClick}>
                <h6>VIEW ALL MUSIC</h6>               
            </div>
        </div>
    )
}

export default withRouter(ArtistShowMusic);