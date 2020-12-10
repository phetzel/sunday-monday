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

    const handleClick = (loc) => {
        history.push(loc);
    }

    const toggleLoginVis = () => {
        const newVis = loginVisible ? false : true;
        setLoginVisible(newVis);
    }

    const dropdown = user ? <AdminDropDown /> : <LoginDropDown />;

    return (
        <div className="top-nav">
            <div className="top-nav-left" >
                <div className="nav-spacemother" onClick={() => handleClick('/')}>
                    <h6 className="nav-pacemother">PACEMOTHER</h6>
                    <div className="nav-s-high">S</div>
                    <div className="nav-s-low">S</div>
                </div>

                <div className="nav-list">
                    <div className="nav-music" onClick={() => handleClick('/music')}>MUSIC</div>
                    <div className="nav-artist" onClick={() => handleClick('/artist')}>ARTIST</div>
                    <div className="nav-media" onClick={() => handleClick('/media')}>MEDIA</div>
                    <div className="nav-events"onClick={() => handleClick('/events')}>EVENTS</div>
                    <div className="nav-store" onClick={() => handleClick('/store')}>STORE</div>
                    <div className="nav-about" onClick={() => handleClick('/about')}>ABOUT</div>
                </div>
            </div>

            <div className="top-nav-right">
                {/* <button className="nav-icon">
                    <FontAwesomeIcon icon={faUserAlt} onClick={toggleLoginVis}/>
                </button> */}

                <div className="search-icon">
                    <img
                        className="search-ellipse"
                        src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fc9bb491f8a87f7078fe376/img/ellipse-24@2x.svg"
                    />
                    <img
                        className="search-line"
                        src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fc9bb491f8a87f7078fe376/img/line-9@2x.svg"
                    />
                </div>
                {loginVisible && dropdown}
            </div>


        </div>
    )
}

export default withRouter(Navbar);



