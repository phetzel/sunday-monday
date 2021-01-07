import React, { useEffect, useState } from 'react';

import releaseApi from '../../util/release_api_util';
import ReleaseListItem from './release_list_item';

const ReleaseIndex = ({ artist, medium, title }) => {
    const [releases, setReleases] = useState();

    const fetchReleases = () => {
        let type;

        if (artist) {
            setReleases(artist.releases);
        } else {
            if (medium) {
                type = {medium: medium};
            }
    
            releaseApi.fetchReleases(type).then(releases => {
                const releasesArray = Object.values(releases);
                setReleases(Array.from(releasesArray));
            })
        }

    }

    useEffect(() => {
        fetchReleases();
    }, []);



    return (
        <div className="content-container">
            <div className="content">

                <div className="header-container">
                    <div className="header">
                        <h1><span>{title}</span></h1>
                    </div>
                </div>

                <div className="header-rect" />

                <ul className="release-index">
                    {releases && releases.map(release => 
                        <ReleaseListItem 
                            release={release} 
                            key={release.id}  />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ReleaseIndex;

