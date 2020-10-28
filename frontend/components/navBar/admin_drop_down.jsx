import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { logout } from '../../util/session_api_util';
import UserContext from '../../context/user_context';


const AdminDropDown = ({history}) => {
    const { user, setUser } = useContext(UserContext);

    const handleClick = (loc) => {
        history.push(loc);
    }

    const handleLogout = () => {
        logout();
        setUser();
    }

    return (
        <ul className="nav-drop-down">
            <li onClick={() => handleClick('/admin')}>Admin</li>
            <li onClick={handleLogout}>Logout</li>
        </ul>
    )
}

export default withRouter(AdminDropDown);