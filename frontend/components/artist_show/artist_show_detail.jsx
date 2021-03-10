import React from 'react';

const ArtistShowDetail = ({ artist }) => {
    const url = artist.bannerUrl ? artist.bannerUrl : artist.photoUrl;

    return (
        <div className="artist-show-details">
            <img src={url}/>
            <h1>{artist.name}</h1>
            <div className="artist-show-bio">
                <p>{artist.description}</p>
            </div>
        </div>
    )
}

export default ArtistShowDetail;


