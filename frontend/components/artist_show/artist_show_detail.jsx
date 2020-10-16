import React from 'react';

const ArtistShowDetail = ({ artist }) => {
    return (
        <div className="artist-show-details">
            <img src={window.dj} alt="dj pic"/>

            <div className="artist-show-details-text">
                <h4 className="p-color">{artist.name}</h4>
                <p>{artist.description}</p>
            </div>
        </div>
    )
}

export default ArtistShowDetail;