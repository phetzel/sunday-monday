import React, { useEffect, useState } from 'react';

import releaseApi from '../../util/release_api_util';
import ReleaseListItem from './release_list_item';

const ReleaseIndex = props => {
    const [releases, setReleases] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const fetchReleases = () => {
        setLoading(true);
        releaseApi.fetchReleases().then(releases => {
            const releasesArray = Object.values(releases);
            setLoading(false);
            setReleases(Array.from(releasesArray));
        }, err => {
            setError(err)
        })
    }

    useEffect(() => {
        fetchReleases();
    }, []);

    return (
        <div className="release-index-container content">
            <ul className="release-index">
                {releases && releases.map(release => 
                    <ReleaseListItem release={release} key={release.id} />)}
            </ul>
        </div>
    )
}

export default ReleaseIndex;

