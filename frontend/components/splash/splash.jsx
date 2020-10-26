import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import BottomNav from '../navBar/bottom_nav';
import SplashArtist from './splash_artist';

const Splash = () => {
    return (
        <div className="splash">
            <BottomNav />
            <div className="splash-placeholder semi-serif">
                Live Laugh Love
            </div>
            <SplashArtist />
        </div>
    )
}

export default Splash;