import React from 'react';

import Navbar from './navbar';
import Splash from './splash';

const Background = ({ history }) => {
    return (
        <div className="background">
            <Navbar history={history} />
            <div className="bottom-rect" />
            <div className="background-mid">
                <div className="left-rect" />
                <Splash />
            </div>
        </div>
    )
}

export default Background;