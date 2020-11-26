import React from 'react';
import { withRouter } from 'react-router-dom';

const MediaDropDown = ({history}) => {
    const handleClick = (loc) => {
        history.push(loc);
    }

    return (
        <ul className="nav-drop-down">
            <li onClick={() => handleClick('/videos')}>Videos</li>
            <li onClick={() => handleClick('/visuals')}>Visual Art</li>
        </ul>
    )
}

export default withRouter(MediaDropDown);