import React from 'react';
import { withRouter } from 'react-router-dom';

const MusicDropDown = ({history}) => {
    const handleClick = (loc) => {
        history.push(loc);
    }

    return (
        <ul className="nav-drop-down">
            <li onClick={() => handleClick('/music/releases')}>Releases</li>
            <li onClick={() => handleClick('/music/playlists')}>Playlists</li>
        </ul>
    )
}

export default withRouter(MusicDropDown);