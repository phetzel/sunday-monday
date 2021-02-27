import React from 'react';
import { withRouter } from 'react-router-dom';

const ArtistDropDown = ({history, handleDropdown}) => {
    const handleClick = (loc) => {
        handleDropdown();
        history.push(loc);
    }

    return (
        <ul className="nav-dropdown">
            <li onClick={() => handleClick('/artists/audio')}>Audio Artists</li>
            <li onClick={() => handleClick('/artists/visual')}>Visual Artists</li>
        </ul>
    )
}

export default withRouter(ArtistDropDown);