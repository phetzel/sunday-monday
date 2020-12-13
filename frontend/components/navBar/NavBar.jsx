import React, { useContext, useState } from 'react';
import { withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';  

import AdminDropDown from './admin_drop_down';
import LoginDropDown from './login_drop_down';
import UserContext from '../../context/user_context';

const Navbar = ({ history }) => {
    const { user, setUser } = useContext(UserContext);
    const [hovering, setHovering] = useState();
    const [loginVisible, setLoginVisible] = useState(false);

    const handleClick = (loc) => {
        history.push(loc);
    }

    const toggleLoginVis = () => {
        const newVis = loginVisible ? false : true;
        setLoginVisible(newVis);
    }

    const handleHover = (num) => {
        setHovering(num);
    }

    const handleUnhover = () => {
        setHovering(null);
    }

    const checkHovering = (num) => {
        return hovering === num ? "nav-hover" : null;
    }

    const dropdown = user ? <AdminDropDown /> : <LoginDropDown />;

    return (
        <div className="top-nav">
            <div className="top-nav-left" >
                <div className="nav-spacemother" onClick={() => handleClick('/')}>
                    <div className="nav-s-high">S</div>
                    <div className="nav-s-low">S</div>
                    <h6 className="nav-pacemother">PACEMOTHER</h6>
                </div>

                <div 
                    className="nav-list"
                    onMouseLeave={handleUnhover}>
                    <div 
                        className={`nav-music ${checkHovering(1)}`}
                        onClick={() => handleClick('/music')}
                        onMouseEnter={() => handleHover(1)}>
                        MUSIC
                    </div>
                    <div 
                        className={`nav-artist ${checkHovering(2)}`}
                        onClick={() => handleClick('/artist')}
                        onMouseEnter={() => handleHover(2)}>
                        ARTIST
                    </div>
                    <div 
                        className={`nav-media ${checkHovering(3)}`}
                        onClick={() => handleClick('/media')}
                        onMouseEnter={() => handleHover(3)}>
                        MEDIA
                    </div>
                    <div 
                        className={`nav-events ${checkHovering(4)}`}
                        onClick={() => handleClick('/events')}
                        onMouseEnter={() => handleHover(4)}>
                        EVENTS
                    </div>
                    <div 
                        className={`nav-store ${checkHovering(5)}`}
                        onClick={() => handleClick('/store')}
                        onMouseEnter={() => handleHover(5)}>
                        STORE
                    </div>
                    <div 
                        className={`nav-about ${checkHovering(6)}`}
                        onClick={() => handleClick('/about')}
                        onMouseEnter={() => handleHover(6)}>
                        ABOUT
                    </div>
                </div>
            </div>

            <div className="top-nav-right">
                <button className="nav-icon">
                    <FontAwesomeIcon icon={faUserAlt} onClick={toggleLoginVis}/>
                </button>

                {/* <div className="search-icon">
                    <img
                        className="search-ellipse"
                        src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fc9bb491f8a87f7078fe376/img/ellipse-24@2x.svg"
                    />
                    <img
                        className="search-line"
                        src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fc9bb491f8a87f7078fe376/img/line-9@2x.svg"
                    />
                </div> */}
                {loginVisible && dropdown}
            </div>


        </div>
    )
}

export default withRouter(Navbar);



