import React from 'react';
import { withRouter } from 'react-router-dom';

const ArtistListItem = ({artist, history}) => {
    const handleClick = () => {
        history.push(`/artists/${artist.id}`);
    }

    return (
        <div className="artist-list-item" onClick={handleClick}>
            <img src={window.dj} alt="dj pic"/>
            <h4>{artist.name}</h4>
        </div>
    )
}

export default withRouter(ArtistListItem);