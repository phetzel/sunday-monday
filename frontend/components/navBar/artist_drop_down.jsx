import React from 'react';
import { withRouter } from 'react-router-dom';

const ArtistDropDown = ({history}) => {
    const handleClick = (loc) => {
        history.push(loc);
    }

    return (
        <ul className="nav-drop-down">
            <li onClick={() => handleClick('/artists/audio')}>Audio Artists</li>
            <li onClick={() => handleClick('/artists/visual')}>Visual Artists</li>
        </ul>
    )
}

export default withRouter(ArtistDropDown);