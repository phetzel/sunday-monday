import React from 'react';

const Navbar = ({ history }) => {
    const handleClick = (loc) => {
        history.push(loc);
    }

    return (
        <div className="navbar">
            <div className="nav-spacemother">
                <h6 className="nav-s-high">S</h6>
                <h6 className="nav-s-low">S</h6>
                <h6 className="nav-pacemother">PACEMOTHER</h6>
            </div>

            <div className="nav-list">
                <li className="nav-li" onClick={() => handleClick('/music')}>MUSIC</li>
                <li className="nav-li" onClick={() => handleClick('/music')}>ARTIST</li>
                <li className="nav-li" onClick={() => handleClick('/music')}>MEDIA</li>
                <li className="nav-li"onClick={() => handleClick('/music')}>EVENTS</li>
                <li className="nav-li" onClick={() => handleClick('/music')}>STORE</li>
                <li className="nav-li" onClick={() => handleClick('/music')}>ABOUT</li>
            </div>
        </div>
    )
}

export default Navbar;