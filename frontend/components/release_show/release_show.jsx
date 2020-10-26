import React, { useEffect, useState } from 'react';

import BottomNav from '../navBar/bottom_nav';
import resleaseApi from '../../util/release_api_util';
import ReleaseShowArtists from './release_show_artists';

const ReleaseShow = ({ match}) => {
    const [release, setRelease] = useState();

    const fetchRelease = () => {
        const id = match.params.id;
        resleaseApi.fetchRelease(id).then(release => {
            setRelease(release);
        })
    }

    useEffect(() => {
        fetchRelease();
    }, []);
    

    return(
        <div>
            <BottomNav />
            <div className="release-show content">
                {release && 
                    <div className="release-show-details">
                        <img src={release.photoUrl} alt="dj pic"/>
                        <iframe 
                            src={`https://open.spotify.com/embed/${release.medium}/${release.spotify}`}
                            width="300" 
                            height="400" 
                            frameBorder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media" />  
                        <div className="release-show-details-text">
                            <div>
                                <h4 className="p-color">{release.title}</h4>
                                <p>{release.description}</p>
                            </div>
                            {release.artists && 
                                <ReleaseShowArtists artists={release.artists} />
                            }
                        </div> 
                    </div>
                }
            </div>
        </div>
    )
}

export default ReleaseShow;