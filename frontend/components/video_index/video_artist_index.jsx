import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import artistApi from '../../util/artist_api_util';
import VideoIndex from './video_index';

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
                <VideoIndex 
                    title={`${artist.name}'s Videos`}
                    videos={artist.videos} />
            }
        </div>
    )
}

export default VideoArtistIndex;