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
        <div>
            {artist && 
                <div className="splash-feature-display" >
                    <h6 onClick={handleClick}>{artist.name}</h6>
                    <img src={artist.photoUrl} onClick={handleClick}/>
                    <p>{artist.description}</p>
                </div>
            }
        </div>
    )
}

export default withRouter(SplashArtist);