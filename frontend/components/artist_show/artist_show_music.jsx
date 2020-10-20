import React from 'react';
import { withRouter } from 'react-router-dom';

const ArtistShowMusic = ({ history, releases }) => {

    const handleClick = (id) => {
        history.push(`/music/${id}`);
    }

    return (
        <div className="artist-show-music">
            <h2 className="p-color">Music</h2>
            <ul>
                {releases.map(release => (
                    <li key={release.id} onClick={() => handleClick(release.id)}>
                        <img 
                            alt={release.title}
                            src={release.photoUrl} 
                            title={release.title} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default withRouter(ArtistShowMusic);