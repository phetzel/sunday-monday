import React, { useContext, useState } from 'react';
import { withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';  

import AdminDropDown from './admin_drop_down';
import LoginDropDown from './login_drop_down';
import UserContext from '../../context/user_context';

const Navbar = ({ history }) => {
    const [loginVisible, setLoginVisible] = useState(false);
    const { user, setUser } = useContext(UserContext);

    console.log(user);

    const handleClick = (loc) => {
        history.push(loc);
    }

    const toggleLoginVis = () => {
        const newVis = loginVisible ? false : true;
        setLoginVisible(newVis);
    }

    const dropdown = user ? <AdminDropDown /> : <LoginDropDown />;

    return (
        <div className="nav-container">
            <div className="navbar" >
                <div className="nav-spacemother" onClick={() => handleClick('/')}>
                    <h6 className="nav-s-high">S</h6>
                    <h6 className="nav-s-low">S</h6>
                    <h6 className="nav-pacemother">PACEMOTHER</h6>
                </div>

                <div className="nav-list">
                    <li className="nav-li" onClick={() => handleClick('/music')}>MUSIC</li>
                    <li className="nav-li" onClick={() => handleClick('/artist')}>ARTIST</li>
                    <li className="nav-li" onClick={() => handleClick('/media')}>MEDIA</li>
                    <li className="nav-li"onClick={() => handleClick('/events')}>EVENTS</li>
                    <li className="nav-li" onClick={() => handleClick('/store')}>STORE</li>
                    <li className="nav-li" onClick={() => handleClick('/about')}>ABOUT</li>
                </div>
            </div>

            <div className="nav-right">
                <button className="nav-icon">
                    <FontAwesomeIcon icon={faUserAlt} onClick={toggleLoginVis}/>
                </button>
                {loginVisible && dropdown}
            </div>

        </div>
    )
}

export default withRouter(Navbar);