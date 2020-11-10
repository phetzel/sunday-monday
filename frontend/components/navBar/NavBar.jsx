import React, { useContext, useState }  from 'react';
import { withRouter } from 'react-router-dom';

import AdminDropDown from './admin_drop_down';
import ArtistDropDown from './artist_drop_down';
import LoginDropDown from './login_drop_down';
import MusicDropDown from './music_drop_down';
import UserContext from '../../context/user_context';

const NavBar = ({ history }) => {
    const { user, setUser } = useContext(UserContext);

    const [tab, setTab] = useState(0);
    const [artistVisible, setArtistVisible] = useState(false);
    const [musicVisible, setMusicVisible] = useState(false);
    const [loginVisible, setLoginVisible] = useState(false);


    
    const handleClick = (loc, num) => {
        history.push(loc);
        setTab(num);
    }
    
    const isActiveTab = (num) => tab === num ? "p-color" : "nav-not-active";

    const tabType = user ? (
        <li
            onMouseEnter={() => setLoginVisible(true)}
            onMouseLeave={() => setLoginVisible(false)}
        >
            <p>Admin</p>
            <div>
                {loginVisible && <AdminDropDown />}
            </div>
        </li>
    ) : (
        <li
            onMouseEnter={() => setLoginVisible(true)}
            onMouseLeave={() => setLoginVisible(false)}
        >
            <p>Login</p>
                <div>
                    {loginVisible && <LoginDropDown />}  
                </div>
        </li>
    );
    
    return (
        <div className='nav-bar background-main'>
            <div className="nav-bar-left" onClick={() => handleClick('/')}>
                <h5>Sunday Monday</h5>
                <img src={window.logo} alt="Logo"/>
            </div>
            <ul>
                <li onClick={() => handleClick('/store', 1)}>
                    <p className={isActiveTab(1)} >Store</p>
                </li>

                <li 
                    onMouseEnter={() => setArtistVisible(true)}
                    onMouseLeave={() => setArtistVisible(false)}
                >
                    <p className={isActiveTab(2)} >Artists</p>
                    <div>
                        {artistVisible && <ArtistDropDown />}                  
                    </div>
                </li>

                <li 
                    onMouseEnter={() => setMusicVisible(true)}
                    onMouseLeave={() => setMusicVisible(false)}
                >
                    <p className={isActiveTab(3)} >Music</p>
                    <div>
                        {musicVisible && <MusicDropDown />}                  
                    </div>
                </li>

                <li onClick={() => handleClick('/videos', 4)}>
                    <p className={isActiveTab(4)} >Videos</p>
                </li>

                <li onClick={() => handleClick('/events', 5)}>
                   <p className={isActiveTab(5)} >Events</p>
                </li>

                {tabType}

            </ul>
        </div>
    )
}

export default withRouter (NavBar);