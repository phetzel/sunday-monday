import React from 'react';
import { withRouter } from 'react-router-dom';
import { SlideDown } from 'react-slidedown';

const MusicDropDown = ({history}) => {
    const handleClick = (loc) => {
        history.push(loc);
    }

    return (
        <SlideDown className={'my-dropdown-slidedown'}>
            <ul className="nav-dropdown">
                <li onClick={() => handleClick('/music/releases')}>Releases</li>
                <li onClick={() => handleClick('/music/playlists')}>Playlists</li>
            </ul>
        </SlideDown>
    )
}

export default withRouter(MusicDropDown);