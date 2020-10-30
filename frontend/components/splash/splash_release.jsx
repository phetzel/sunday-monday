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
                <div className="splash-content p-bg-color" >   
                    <div className="splash-content-header">
                        <h1 className="p-color">Featured Release</h1>
                        <h5>{release.title}</h5>
                    </div>       

                    <div className="splash-content-details">
                        <img src={release.photoUrl} onClick={handleClick}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default withRouter(SplashRelease);