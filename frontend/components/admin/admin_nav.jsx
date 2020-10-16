import React from 'react';
import { withRouter } from 'react-router-dom';

const AdminNav = ({ history }) => {
    const handleClick = (loc) => {
        history.push(loc);
    }

    return (
        <div className="bottom-nav">
            <ul>
                <li onClick={() => handleClick('/admin/artists')}>Artists</li>
            </ul>
        </div>
    )
}

export default withRouter(AdminNav);