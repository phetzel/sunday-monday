import React, { useEffect, useState } from 'react';

import releaseApi from '../../util/release_api_util';
import ReleaseListItem from './release_list_item';

const ReleaseIndex = ({ artist, medium, title }) => {
    const [releases, setReleases] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [more, setMore] = useState();

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
            
            releaseApi.fetchReleases(data).then(response => {
                const releasesArray = Object.values(response).reverse();
                setReleases([...releases, ...releasesArray]);
                setLoading(false);
                releasesArray.length < 6 ? setMore(false) : setMore(true);
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
                
                { more && 
                    <div className="artist-show-button" onClick={() => setPage(page + 1)}>
                        <h6>MORE</h6>               
                    </div>
                }
            </div>
        </div>
    )
}

export default ReleaseIndex;

