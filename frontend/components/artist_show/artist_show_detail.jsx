import React from 'react';

const ArtistShowDetail = ({ artist }) => {
    const description = artist.description.split('***');

    return (
        <div className="artist-show-details">
            <img src={artist.photoUrl} alt="dj pic"/>

            <div className="artist-show-details-text">
                <h4 className="p-color">{artist.name}</h4>
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
    )
}

export default ArtistShowDetail;