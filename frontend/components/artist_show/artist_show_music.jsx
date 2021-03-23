import React from 'react';
import { withRouter } from 'react-router-dom';

import ReleaseListItem from '../release_index/release_list_item';

const ArtistShowMusic = ({ artist_id, history, releases }) => {

    const handleClick = (id) => {
        history.push(`/music/${id}`);
    }

    const handleAllClick = () => {
        history.push(`/artists/${artist_id}/music`)
    }

    const newMusic = releases.reverse().slice(0,3);

    return (
        <div>
            <h1>MUSIC</h1>
            <ul className="list">
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