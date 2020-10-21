import React, { useEffect, useState } from 'react';

import artistApi from '../../util/artist_api_util';
import ArtistShowDetail from './artist_show_detail';
import ArtistShowMusic from './artist_show_music';
import BottomNav from '../navBar/bottom_nav';

const ArtistShow = ({ match}) => {
    const [artist, setArtist] = useState();

    const fetchArtist = () => {
        const id = match.params.id;
        artistApi.fetchArtist(id).then(artist => {
            setArtist(artist);
        })
    }

    useEffect(() => {
        fetchArtist();
    }, []);
    
    if(artist) console.log(artist.releases);

    return(
        <div>
            <BottomNav />
            <div className="artist-show content">
                {artist && <ArtistShowDetail artist={artist}/>}
                {artist && artist.releases.length > 0 &&
                    <ArtistShowMusic releases={artist.releases} />}
            </div>
        </div>
    )
}

export default ArtistShow;