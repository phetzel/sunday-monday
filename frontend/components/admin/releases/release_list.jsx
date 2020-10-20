import React, { useState, useEffect } from 'react';

import releaseApi from '../../../util/release_api_util';

const ReleaseList = () => {
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

    const deleteRelease = (id) => {
        releaseApi.deleteRelease(id).then(releases => {
            const releasesArray = Object.values(releases);
            setReleases(Array.from(releasesArray));
        });
    }

    useEffect(() => {
        fetchReleases();
    }, []);

    return (
        <div className="admin-list">
            <h2 className="p-color">Edit Releases</h2>
            <ul>
                { releases &&
                    releases.map(release => (
                    <li key={release.id}>
                        <p>{release.title}</p>
                        <i onClick={() => deleteRelease(release.id)}>&#128465;</i>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReleaseList;