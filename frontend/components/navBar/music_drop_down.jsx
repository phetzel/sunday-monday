import React from 'react';
import { withRouter } from 'react-router-dom';

const MusicDropDown = ({history, handleDropdown}) => {
    const handleClick = (loc) => {
        handleDropdown();
        history.push(loc);
    }

    return (
        <ul className="nav-dropdown">
            <li onClick={() => handleClick('/music/releases')}>Releases</li>
            <li onClick={() => handleClick('/music/playlists')}>Playlists</li>
        </ul>
    )
}

export default withRouter(MusicDropDown);