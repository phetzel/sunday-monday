import React from 'react';
import { withRouter } from 'react-router-dom';
// import { useNavigation } from '@react-navigation/native';

const Space = ({ history }) => {
    // const navigation = useNavigation();

    const handleStore = () => {
        window.open('https://www.etsy.com/shop/SpaceMotherSupplies', '_blank');
    }

    const handleClick = (loc) => {
        // navigation.popToTop();
        history.replace(loc);
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