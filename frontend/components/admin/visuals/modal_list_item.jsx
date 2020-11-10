import React from 'react';

const ModalListItem = ({ artist, painters, handleClick }) => {
    const style = painters.includes(artist.id) ? 
        "admin-feature-modal-active" : "admin-feature-modal-inactive";


    return (
        <li 
            className={style}
            key={artist.id}
            onClick={() => handleClick(artist.id)}>
            {artist.name}
        </li>
    )
};

export default ModalListItem;