import React, { useEffect, useState } from 'react';

import resleaseApi from '../../util/release_api_util';

const ReleaseShow = ({ match}) => {
    const [release, setRelease] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchRelease = () => {
        const id = match.params.id;
        setLoading(true);
        resleaseApi.fetchRelease(id).then(release => {
            setLoading(false);
            setRelease(release);
        }, err => {
            setError(err)
        })
    }

    useEffect(() => {
        fetchRelease();
    }, []);
    

    return(
        <div className="release-show content">
            {release && 
                <div className="release-show-details">
                    <img src={window.dj} alt="dj pic"/>
                    <iframe 
                        src={`https://open.spotify.com/embed/album/${release.spotify}`}
                        width="300" 
                        height="400" 
                        frameborder="0" 
                        allowtransparency="true" 
                        allow="encrypted-media" />  
                    <div className="release-show-details-text">
                        <h4 className="p-color">{release.title}</h4>
                        <p>{release.description}</p>
                    </div> 
                </div>
            }
        </div>
    )
}

export default ReleaseShow;