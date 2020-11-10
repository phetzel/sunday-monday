import React from 'react';
import { withRouter } from 'react-router-dom';

const ArtistShowVisual = ({ history, visuals }) => {

    const handleClick = (id) => {
        history.push(`/visuals/${id}`);
    }

    return (
        <div className="artist-show-music">
            <h2 className="p-color">Visual Art</h2>
            <ul>
                {visuals.map(visual => (
                    <li key={visual.id} onClick={() => handleClick(visual.id)}>
                        <img 
                            alt={visual.title}
                            src={visual.photoUrl} 
                            title={visual.title} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default withRouter(ArtistShowVisual);