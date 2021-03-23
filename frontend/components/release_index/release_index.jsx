import React, { useEffect, useState } from 'react';

import releaseApi from '../../util/release_api_util';
import ReleaseListItem from './release_list_item';

const ReleaseIndex = ({ artist, medium, title }) => {
    const [releases, setReleases] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [pageY, setPageY] = useState(0);

    const fetchReleases = () => {
        let type;
        setLoading(true);

        if (artist) {
            setReleases(artist.releases.reverse());
        } else {
            if (medium) {
                type = {medium: medium};
            }
            const data = { type, page };
            releaseApi.fetchReleases(data).then(releases => {
                const releasesArray = Object.values(releases);
                setReleases(Array.from(releasesArray));
                console.log(releases);
                setLoading(false);
            })
        }

    }

    useEffect(() => {
        fetchReleases();
    }, [page]);



    return (
        <div className="content-container">
            <div className="content">

                <div className="header-container">
                    <div className="header">
                        <h1><span>{title}</span></h1>
                    </div>
                </div>

                <div className="header-rect" />

                <ul className="list">
                    {releases && releases.map(release => 
                        <ReleaseListItem 
                            release={release} 
                            key={release.id}  />
                    )}
                </ul>

                {/* <div className="artist-show-button" onClick={() => setPage(page + 1)}>
                    <h6>MORE</h6>               
                </div> */}
            </div>
        </div>
    )
}

export default ReleaseIndex;

