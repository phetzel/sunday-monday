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
        history.push(`/music/${release.id}`)
    }

    return (
        <div className="splash-subcontainer">
            {release && 
                <div className="splash-short">
                    <h5>Featured Release</h5> 
                    <img src={release.photoUrl} onClick={handleClick}/>
                    <h6>{release.title}</h6>
                    <p>{release.description}</p>
                </div>
            }
        </div>
    )
}

export default withRouter(SplashRelease);