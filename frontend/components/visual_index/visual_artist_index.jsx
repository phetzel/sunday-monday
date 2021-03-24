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
        <div className="content-container">
            {artist && 
                <div className="content">

                    <div className="header-container">
                        <div className="header">
                        <h1><span>{artist.name}</span></h1>
                        </div>
                    </div>
                    
                    <div className="header-rect" />


                    <VisualIndex id={id} />
                </div>
            }
        </div>

    )
}

export default VideoArtistIndex;