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
                <div className="list-item">
                    <img 
                        alt={artist.name}
                        src={artist.photoUrl} 
                        title={artist.name}/>
                    <div className="list-item-bottom">
                        <h4>{artist.name}</h4>
                        <a onClick={handleClick}>VIEW ARTIST</a>
                    </div>
                </div>
            }
        </div>
    )
}

export default withRouter(SplashArtist);