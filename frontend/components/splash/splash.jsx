import React from 'react';  

import SplashArtist from './splash_artist';
import SplashEvent from './splash_event';
import SplashRelease from './splash_release';

const Splash = () => {
    return (
        <div className="splash">
            <div className="splash-upper">
                <img className="splash-logo" src={window.logo} alt="Logo"/>
                <h1 className="she">She</h1>
                <div className="she-primary-container">
                    <h1 className="she-primary">She</h1>
                </div>
                <div className="descends-white-container">
                    <h1 className="descends-white">Descends</h1>
                </div>
                <h1 className="descends">Descends</h1>
            </div>
            
            <div className="splash-lower">
                <SplashEvent />
                <SplashArtist />
                <SplashRelease />
            </div>
        </div>
    )
}


export default Splash;