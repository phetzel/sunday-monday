import React from 'react';
import { withRouter } from 'react-router-dom';

const VisualShowArtists = ({ artists, history }) => {

    const handleClick = (id) => {
        history.push(`/artists/${id}`);
    }

    return (
        <div className="artist-association">
            <h4 className="p-color">Artists</h4>
            <ul>
                {
                    artists.map(artist => 
                        <li
                            className="p-class"
                            key={artist.id}
                            onClick={() => handleClick(artist.id)}>
                            <img src={artist.photoUrl}/>
                            <p>{artist.name}</p>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default withRouter(VisualShowArtists);