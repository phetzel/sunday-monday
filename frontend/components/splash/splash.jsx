import React from 'react';  

import BottomNav from '../navBar/bottom_nav';
import Slider from "react-slick";
import SplashArtist from './splash_artist';
import SplashEvent from './splash_event';
import SplashRelease from './splash_release';

const Splash = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="splash">
            <BottomNav />
            <div className="splash-placeholder semi-serif">
                Live Laugh Love
            </div>
            
            <Slider {...settings}>
                <SplashEvent />
                <SplashArtist />
                <SplashRelease />
            </Slider>
        </div>
    )
}

export default Splash;