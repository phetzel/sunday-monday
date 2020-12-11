import React, { useEffect, useState } from 'react';

import artistApi from '../../util/artist_api_util';
import ReleaseIndex from './release_index';

const ReleaseArtistIndex = ({ match }) => {
    const { id } = match.params;

    const [artist, setArtist] = useState();

    useEffect(() => {
        artistApi.fetchArtist(id).then(artist => {
            setArtist(artist);
        });
    }, []);
    
    return (
        <div>
            { artist && 
                <ReleaseIndex artist={artist} title={`${artist.name}'s New Music`} />
            }
        </div>
    )
}

export default ReleaseArtistIndex;