import React from 'react';  

import SplashArtist from './splash_artist';
import SplashEvent from './splash_event';
import SplashRelease from './splash_release';

const Splash = () => {
    return (
        <div>
            <div className="splash-upper-container">
                <div className="splash-upper">
                    <div className="splash-rect" />
                    <div className="splash-image-cover">
                        <img 
                            className="splash-image" 
                            src={"https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd07038a7566d7346c0dfd6/img/image-11@1x.jpg"} 
                            alt="Splash"/>
                    </div>

                    <h1 className="she">SHE</h1>
                    {/* <div className="she-partial">
                        <h1 className="splash-primary">SHE</h1>
                    </div> */}

                    <h1 className="descends">DESCENDS</h1>
                    <div className="descends-partial"> 
                        <h1 className="splash-secondary">DESCENDS</h1>
                    </div>    
                </div>
            </div>

            <div className="content-container">
                <div className="content">

                    <div className="splash-lower">
                        <div className="splash-lower-spotlight">
                            <h1>SPOTLIGHT</h1>
                            {/* <div className="splash-lower-rect" /> */}
                        </div>

                        <div className="list">
                            <SplashArtist />
                            <SplashRelease />
                            <SplashEvent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Splash;

