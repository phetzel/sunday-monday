import React, { useEffect, useState } from 'react';

import artistApi from '../../util/artist_api_util';
import ArtistListItem from './artist_list_item';
import BottomNav from '../navBar/bottom_nav';

const ArtistIndex = props => {
    const [artists, setArtists] = useState();


    const fetchArtists = () => {
        artistApi.fetchArtists().then(artists => {
            setArtists(artists);
        })
    }

    useEffect(() => {
        fetchArtists();
    }, []);

    return (
        <div>
            <BottomNav />
            <div className="artist-index-container content">
                <ul className="artist-index">
                    {artists && artists.map(artist => 
                        <ArtistListItem artist={artist} key={artist.id} />)}
                </ul>
            </div>
        </div>
    )
}

export default ArtistIndex;

