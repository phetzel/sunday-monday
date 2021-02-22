import React, { useContext, useState } from 'react';
import { withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserAlt } from '@fortawesome/free-solid-svg-icons';  

import AdminDropDown from './admin_drop_down';
import ArtistDropDown from './artist_drop_down';
import LoginDropDown from './login_drop_down';
import MediaDropDown from './media_drop_down';
import MusicDropDown from './music_drop_down';
import UserContext from '../../context/user_context';

const Navbar = ({ history }) => {
    const { user, setUser } = useContext(UserContext);
    const [hovering, setHovering] = useState();
    const [artistVisible, setArtistVisible] = useState(false);
    const [loginVisible, setLoginVisible] = useState(false);
    const [mediaVisible, setMediaVisible] = useState(false);
    const [musicVisible, setMusicVisible] = useState(false);
    const [dropVisable, setDropVisable] = useState(false);

    const handleClick = (loc) => {
        history.push(loc);
    }

    const handleStore = () => {
        setHovering(null);
        window.open('https://www.etsy.com/shop/SpaceMotherSupplies', '_blank');
    }

    const toggleLoginVis = () => {
        const newVis = loginVisible ? false : true;
        setLoginVisible(newVis);
    }

    const handleVisibility = (func, num) => {
        if (num) {
            setHovering(num);
        }

        func(true);
    }

    const handleDropdown = () => {
        // e.stopPropagation();
        setDropVisable(!dropVisable);
        console.log(dropVisable);
    }

    const handleHover = (num) => {
        setHovering(num);
    }

    const handleUnhover = () => {
        setArtistVisible(false);
        setMediaVisible(false);
        setMusicVisible(false);
        setHovering(null);
    }

    const checkHovering = (num) => {
        return hovering === num ? "nav-hover" : null;
    }

    const dropdown = user ? <AdminDropDown /> : <LoginDropDown />;
    const listClass = dropVisable ? "nav-verticle" : "nav-verticle-invisible";

    return (
        <div className="top-nav">
            <div className="top-nav-left">
                <div className="nav-hamburger" onClick={() => handleDropdown()}>
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <div className="nav-spacemother" onClick={() => handleClick('/')}>
                    <h6>SPACEMOTHER</h6>
                </div>

                <div className={`nav-list ${listClass}`}>
                    <div 
                        className={`nav-music ${checkHovering(1)}`}
                        onMouseEnter={() => handleVisibility(setMusicVisible, 1)}
                        onMouseLeave={handleUnhover}>
                        MUSIC
                        {musicVisible && <MusicDropDown /> }
                    </div>
                    <div 
                        className={`nav-artist ${checkHovering(2)}`}
                        onMouseEnter={() => handleVisibility(setArtistVisible, 2)}
                        onMouseLeave={handleUnhover}>
                        ARTIST
                        {artistVisible && <ArtistDropDown /> }
                    </div>
                    <div 
                        className={`nav-media ${checkHovering(3)}`}
                        onMouseEnter={() => handleVisibility(setMediaVisible, 3)}
                        onMouseLeave={handleUnhover}>
                        MEDIA
                        {mediaVisible && <MediaDropDown /> }
                    </div>
                    <div 
                        className={`nav-events ${checkHovering(4)}`}
                        onClick={() => handleClick('/events')}
                        onMouseEnter={() => handleHover(4)}
                        onMouseLeave={handleUnhover}>
                        EVENTS
                    </div>
                    <div 
                        className={`nav-store ${checkHovering(5)}`}
                        onClick={handleStore}
                        onMouseEnter={() => handleHover(5)}
                        onMouseLeave={handleUnhover}>
                        STORE
                    </div>
                    <div 
                        className={`nav-about ${checkHovering(6)}`}
                        onClick={() => handleClick('/about')}
                        onMouseEnter={() => handleHover(6)}
                        onMouseLeave={handleUnhover}>
                        ABOUT
                    </div>
                </div>
            </div>

            <div className="top-nav-right">
                <button className="nav-icon">
                    <FontAwesomeIcon icon={faUserAlt} onClick={toggleLoginVis}/>
                </button>
                
                {loginVisible && dropdown}
            </div>


        </div>
    )
}

export default withRouter(Navbar);



