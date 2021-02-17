import React from 'react';
import { withRouter } from 'react-router-dom';

const EventIndexItemArtists = ({ artists, history }) => {
    if (artists.length < 1) return null;

    const handleClick = (id) => {
        history.push(`/artists/${id}`);
    }

    return (
        <ul>
            {
                artists.map((artist, idx) => (
                    <li 
                        onClick={() => handleClick(artist.id)}
                        key={idx}>
                        {artist.name}
                    </li>
                ))
            }
        </ul>
    )
}

export default withRouter(EventIndexItemArtists);