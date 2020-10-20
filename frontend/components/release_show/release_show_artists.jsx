import React from 'react';
import { withRouter } from 'react-router-dom';

const ReleaseShowArtists = ({ artists, history }) => {

    const handleClick = (id) => {
        history.push(`/artists/${id}`);
    }

    return (
        <div className="release-show-artist">
            <h4 className="p-color">Artists</h4>
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

export default withRouter(ReleaseShowArtists);