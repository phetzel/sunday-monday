import React, { useEffect, useState } from 'react';

import artistApi from '../../util/artist_api_util';
import ArtistShowDetail from './artist_show_detail';
import BottomNav from '../navBar/bottom_nav';

const ArtistShow = ({ match}) => {
    const [artist, setArtist] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchArtist = () => {
        const id = match.params.id;
        setLoading(true);
        artistApi.fetchArtist(id).then(artist => {
            setLoading(false);
            setArtist(artist);
        }, err => {
            setError(err)
        })
    }

    useEffect(() => {
        fetchArtist();
    }, []);
    
    console.log(artist);
    return(
        <div>
            <BottomNav />
            <div className="artist-show content">
                {artist && <ArtistShowDetail artist={artist}/>}
            </div>
        </div>
    )
}

export default ArtistShow;