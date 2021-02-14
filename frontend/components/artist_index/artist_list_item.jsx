import React from 'react';
import { withRouter } from 'react-router-dom';


const ArtistListItem = ({artist, history}) => {
    const handleClick = () => {
        history.push(`/artists/${artist.id}`);
    }

    return (
        <div className="artist-list-item" onClick={handleClick}>
            <img src={artist.photoUrl} alt="dj pic"></img>
            <div className="artist-list-item-name">
                <h3>{artist.name}</h3>
            </div>
        </div>
    )
}

export default withRouter(ArtistListItem);