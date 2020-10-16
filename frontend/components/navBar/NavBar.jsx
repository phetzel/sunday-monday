import React, { useState }  from 'react';
import { withRouter } from 'react-router-dom';

const NavBar = ({ history }) => {
    const [tab, setTab] = useState(0);
    
    const handleClick = (loc, num) => {
        history.push(loc);
        setTab(num);
    }
    
    const isActiveTab = (num) => tab === num ? "p-color" : "nav-not-active";
    
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
                <li onClick={() => handleClick('/artists', 2)}>
                    <p className={isActiveTab(2)} >Artists</p>
                </li>
                <li onClick={() => handleClick('/music', 3)}>
                   <p className={isActiveTab(3)} >Music</p>
                </li>
                <li onClick={() => handleClick('/events', 4)}>
                   <p className={isActiveTab(4)} >Events</p>
                </li>
                <li onClick={() => handleClick('/contact', 5)}>
                    <p className={isActiveTab(5)} >Contact</p>
                </li>
            </ul>
        </div>
    )
}

export default withRouter (NavBar);