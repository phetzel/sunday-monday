import React from 'react';
import { withRouter } from 'react-router-dom';


const ArtistListItem = ({artist, history}) => {
    const handleClick = () => {
        history.push(`/artists/${artist.id}`);
    }

    return (
        <div className="artist-list-item" onClick={handleClick}>
            <img src={artist.photoUrl} alt="dj pic"/>
            <div className="visual-list-item-bottom">
                <h6>{artist.name}</h6>
            </div>
        </div>
    )
}

export default withRouter(ArtistListItem);