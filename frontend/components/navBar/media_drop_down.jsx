import React from 'react';
import { withRouter } from 'react-router-dom';

const MediaDropDown = ({history, handleDropdown}) => {
    const handleClick = (loc) => {
        handleDropdown();
        history.push(loc);
    }

    return (
        <ul className="nav-dropdown">
            <li onClick={() => handleClick('/videos')}>Videos</li>
            <li onClick={() => handleClick('/visuals')}>Visual Art</li>
        </ul>
    )
}

export default withRouter(MediaDropDown);