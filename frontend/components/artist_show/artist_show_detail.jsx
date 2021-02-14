import React from 'react';

const ArtistShowDetail = ({ artist }) => {
    return (
        <div className="artist-show-details">
            <img src={artist.photoUrl}/>
            <h1>{artist.name}</h1>
            <div className="artist-show-bio">
                <p>{artist.description}</p>
            </div>
        </div>
    )
}

export default ArtistShowDetail;


