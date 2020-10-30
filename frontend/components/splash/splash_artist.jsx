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
                <div className="splash-content" > 
                    <div className="splash-content-header">
                        <h1 className="p-color">Featured Artist</h1>
                        <h5>{artist.name}</h5>
                    </div>         
                    <img src={artist.photoUrl} onClick={handleClick}/>
                </div>
            }
        </div>
    )
}

export default withRouter(SplashArtist);