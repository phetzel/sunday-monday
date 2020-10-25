import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import BottomNav from '../navBar/bottom_nav';

const Splash = () => {
    return (
        <ParallaxProvider>
            <div className="splash">
                <BottomNav />
                <div className="splash-placeholder semi-serif">Live Laugh Love</div>
                <div className="pallarax" /> 

                <Parallax 
                    className="hor-pallarax"
                    y={[-20, 20]}
                    
                    >
                    <div className="hor-pallarax"></div>
                </Parallax>

            </div>
        </ParallaxProvider>
    )
}

export default Splash;