import React, { useEffect, useState } from 'react';

import releaseApi from '../../util/release_api_util';
import ReleaseListItem from './release_list_item';

const ReleaseIndex = ({medium, title}) => {
    const [releases, setReleases] = useState();

    const fetchReleases = () => {
        const type = {medium: medium};
        releaseApi.fetchReleases(type).then(releases => {
            const releasesArray = Object.values(releases);
            setReleases(Array.from(releasesArray));
        })
    }

    useEffect(() => {
        fetchReleases();
    }, []);


    return (
        <div>
            <div className="release-index-container content">
                <div className="release-index-header">
                    <h1 className="p-color">{title}</h1>
                </div>
                <ul className="release-index">
                    {releases && releases.map(release => 
                        <ReleaseListItem release={release} key={release.id} />)}
                </ul>
            </div>
        </div>
    )
}

export default ReleaseIndex;

