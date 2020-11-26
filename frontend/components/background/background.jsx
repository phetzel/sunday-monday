import React from 'react';
import { withRouter} from 'react-router-dom';

import Navbar from './navbar';

const Background = ({ history }) => {
    return (
        <div className="background">
            <Navbar history={history} />
            <div className="bottom-rect" />
            <div className="left-rect" />
        </div>
    )
}

export default withRouter(Background);