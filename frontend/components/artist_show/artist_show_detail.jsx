import React from 'react';

const ArtistShowDetail = ({ artist }) => {
    const description = artist.description.split('***');

    return (
        <div className="artist-show-details">
            <div className="artist-show-details-text">
                <h2>{artist.name}</h2>
                <div className="artist-show-details-content">
                    {
                        description.map((desc, idx) => (
                            <span key={idx}>
                                <p>{desc}</p>
                                <br />
                            </span>
                        ))
                    }
                </div>
            </div>
            <img src={artist.photoUrl}/>
        </div>
    )
}

export default ArtistShowDetail;