import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import releaseApi from '../../util/release_api_util';

const SplashRelease = ({history}) => {
    const [release, setRelease] = useState();

    const fetchRelease = () => {
        releaseApi.fetchRelease().then(release => {
            setRelease(release);
        })
    }

    useEffect(() => {
        fetchRelease();
    }, []);
    
    const handleClick = () => {
        history.push(`/releases/${release.id}`)
    }

    return (
        <div className="splash-subcontainer">
            {release && 
                <div className="splash-content"  onClick={handleClick}>          
                    <h1 className="p-color">Featured Release</h1>
                    <div className="splash-content-details">
                        <h5>{release.title}</h5>
                        <img src={release.photoUrl} />
                    </div>
                </div>
            }
        </div>
    )
}

export default withRouter(SplashRelease);