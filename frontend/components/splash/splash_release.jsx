import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import releaseApi from '../../util/release_api_util';
import ReleaseListItem from '../release_index/release_list_item';

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
    console.log(release);
    
    return (
        <div>
            {release && 
                <ReleaseListItem release={release} />
            }
        </div>
    )
}

export default withRouter(SplashRelease);