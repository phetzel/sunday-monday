import React, { useEffect, useState } from 'react';

import artistApi from '../../util/artist_api_util';
import ReleaseIndex from './release_index';

const ReleaseArtistIndex = ({ match, music, setMusic }) => {
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
                <ReleaseIndex 
                    artist={artist} 
                    music={music}
                    setMusic={setMusic}
                    title={`${artist.name}`} />
            }
        </div>
    )
}

export default ReleaseArtistIndex;