import React from 'react';  

import SplashArtist from './splash_artist';
import SplashEvent from './splash_event';
import SplashRelease from './splash_release';

const Splash = () => {
    return (
        <div className="splash">
            <div className="splash-upper">
                <div className="splash-rect" />
                <img className="splash-image" src={window.splash} alt="Splash"/>
                {/* {/* <img className="splash-logo" src={window.logo} alt="Logo"/> */}
                {/* <h1 className="she">She</h1> */}
                {/* <div className="she-primary-container"> */}
                    {/* <h1 className="she-primary">She</h1> */}
                {/* </div> */}
                {/* <div className="descends-white-container"> */}
                    {/* <h1 className="descends-white">Descends</h1> */}
                {/* </div> */}
                {/* <h1 className="descends">Descends</h1> */}
            </div>
        
            <div className="splash-lower-container">
                <div className="splash-lower">
                    <div className="splash-lower-content">
                        <SplashArtist />
                        <SplashRelease />
                        {/* <SplashEvent /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Splash;



//   <div class="overlap-group1-C61RwL">
//     <div class="rectangle-235"></div>

//     <div class="frame-311">
//       <div class="auto-flex1">
//         <div class="porter-rob-son-706195 valign-text-middle helvetica-bold-blackcurrant-16px border-class-1">
//           PORTER ROBINSON
//         </div>
//         <div class="worlds-706197 valign-text-middle helvetica-bold-blackcurrant-16px border-class-1">WORLDS</div>
//         <img
//           class="mask-group-i0ZMmI"
//           src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd07038a7566d7346c0dfd6/img/mask-group-3@2x.svg"
//         />
//         <p class="lorem-ipsu-re-et-7108 valign-text-middle helvetica-regular-normal-blackcurrant-16px border-class-1">
//           LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE
//           MAGNA ALIQUA. UT DIOLORE MAGNA ALIQUA. UT DIDUNT UT LABORE ET
//         </p>
//       </div>
//       <div class="auto-flex2">
//         <div class="porter-robinson-7109 helvetica-bold-blackcurrant-16px border-class-1">PORTER ROBINSON</div>
//         <div class="worlds-71010 valign-text-middle helvetica-bold-blackcurrant-16px border-class-1">WORLDS</div>
//         <img
//           class="mask-group-i0ZMmI"
//           src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd07038a7566d7346c0dfd6/img/mask-group-3@2x.svg"
//         />
//         <p class="lorem-ipsu-re-et-7106 valign-text-middle helvetica-regular-normal-blackcurrant-16px border-class-1">
//           LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE
//           MAGNA ALIQUA. UT DIOLORE MAGNA ALIQUA. UT DIDUNT UT LABORE ET
//         </p>
//       </div>
//       <div class="auto-flex3">
//         <div class="porter-rob-nson-71011 helvetica-bold-blackcurrant-16px border-class-1">PORTER ROBINSON</div>
//         <div class="worlds-71012 valign-text-middle helvetica-bold-blackcurrant-16px border-class-1">WORLDS</div>
//         <img
//           class="mask-group-i0ZMmI"
//           src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd07038a7566d7346c0dfd6/img/mask-group-3@2x.svg"
//         />
//         <p class="lorem-ipsu-re-et-7107 valign-text-middle helvetica-regular-normal-blackcurrant-16px border-class-1">
//           LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE
//           MAGNA ALIQUA. UT DIOLORE MAGNA ALIQUA. UT DIDUNT UT LABORE ET
//         </p>
//       </div>
//     </div>
//   </div>
