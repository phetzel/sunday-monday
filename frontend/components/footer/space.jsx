import React from 'react';
import { withRouter } from 'react-router-dom';

const Space = ({ history }) => {
    console.log(history);
    const handleStore = () => {
        window.open('https://www.etsy.com/shop/SpaceMotherSupplies', '_blank');
    }

    const handleClick = (loc) => {
        history.push(loc);
    }

    return (
        <div className="footer-space">
            <h1>SPACEMOTHER</h1>
            <h4 onClick={() => handleClick('about')}>ABOUT US</h4>
            <h4 onClick={handleStore}>STORE</h4>
            <h4 onClick={() => handleClick('contact')}>CONTACT</h4>
        </div>
    )
}

export default withRouter(Space);