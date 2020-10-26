import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import BottomNav from '../navBar/bottom_nav';
import SplashArtist from './splash_artist';
import SplashRelease from './splash_release';

const Splash = () => {
    return (
        <div className="splash">
            <BottomNav />
            <div className="splash-placeholder semi-serif">
                Live Laugh Love
            </div>
            <SplashArtist />
            <SplashRelease />
        </div>
    )
}

export default Splash;