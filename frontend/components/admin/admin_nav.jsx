import React from 'react';
import { withRouter } from 'react-router-dom';

const AdminNav = ({ history }) => {
    const handleClick = (loc) => {
        history.push(loc);
    }

    return (
        <div className="admin-nav">
            <ul>
                <li onClick={() => handleClick('/admin/artists')}>Artists</li>
                <li onClick={() => handleClick('/admin/events')}>Events</li>
                <li onClick={() => handleClick('/admin/music')}>Music</li>
                <li onClick={() => handleClick('/admin/videos')}>Videos</li>
                <li onClick={() => handleClick('/admin/visuals')}>Visual Art</li>
            </ul>
        </div>
    )
}

export default withRouter(AdminNav);