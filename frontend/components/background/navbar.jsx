import React from 'react';
import { withRouter} from 'react-router-dom';

const Navbar = ({ history }) => {
    const handleClick = (loc) => {
        history.push(loc);
    }

    return (
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
    )
}

export default withRouter(Navbar);