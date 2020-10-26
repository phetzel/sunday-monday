import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import artistApi from '../../util/artist_api_util';

const SplashArtist = ({history}) => {
    const [artist, setArtist] = useState();

    const fetchArtist = () => {
        artistApi.fetchArtist().then(artist => {
            setArtist(artist);
        })
    }

    useEffect(() => {
        fetchArtist();
    }, []);
    
    const handleClick = () => {
        history.push(`/artists/${artist.id}`)
    }

    return (
        <div className="splash-subcontainer">
            {artist && 
                <div className="splash-content"  onClick={handleClick}>          
                    <h1 className="p-color">Featured Artist</h1>
                    <div className="splash-content-details">
                        <h5>{artist.name}</h5>
                        <img src={artist.photoUrl} />
                    </div>
                </div>
            }
        </div>
    )
}

export default withRouter(SplashArtist);