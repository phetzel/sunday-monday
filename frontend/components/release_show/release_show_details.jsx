import React from 'react';

const ReleaseShowDetail = ({ release }) => {
    const description = release.description.split('***');

    return (
        <div className="artist-show-details-container">
            <div className="artist-show-details">
                <h1>{release.title}</h1>
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
            <img src={release.photoUrl}/>
        </div>
    )
}

export default ReleaseShowDetail;
