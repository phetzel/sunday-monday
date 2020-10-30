import React from 'react';
import { withRouter } from 'react-router-dom';

const EventShowArtists = ({ artists, history }) => {

    const handleClick = (id) => {
        history.push(`/artists/${id}`);
    }

    return (
        <div className="event-show-artist">
            <h5 className="p-color">Artists</h5>
            <ul>
                {
                    artists.map(artist => 
                        <li
                            className="p-class"
                            key={artist.id}
                            onClick={() => handleClick(artist.id)}>
                            {artist.name}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default withRouter(EventShowArtists);