import React, { useEffect, useState } from 'react';

import artistApi from '../../util/artist_api_util';
import VisualIndex from './visual_index';

const VideoArtistIndex = ({ match }) => {
    const { id } = match.params;
    const [artist, setArtist] = useState();

    useEffect(() => {
        artistApi.fetchArtist(id).then(artist => {
            setArtist(artist);
        });
    }, []);

    return (
        <div>
            {artist && 
                <VisualIndex id={id} title={artist.name} />
            }
        </div>

    )
}

export default VideoArtistIndex;