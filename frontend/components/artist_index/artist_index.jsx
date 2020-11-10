import React, { useEffect, useState } from 'react';

import artistApi from '../../util/artist_api_util';
import ArtistListItem from './artist_list_item';
import BottomNav from '../navBar/bottom_nav';

const ArtistIndex = ({style, title}) => {
    const [artists, setArtists] = useState();

    const fetchArtists = () => {
        const type = {style: style};
        artistApi.fetchArtists(type).then(artists => {
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
                <div className="artist-index-header">
                    <h1 className="p-color">{title}</h1>
                </div>
                <ul className="artist-index">
                    {artists && artists.map(artist => 
                        <ArtistListItem artist={artist} key={artist.id} />)}
                </ul>
            </div>
        </div>
    )
}

export default ArtistIndex;

