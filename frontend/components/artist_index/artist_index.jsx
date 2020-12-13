import React, { useEffect, useState } from 'react';

import artistApi from '../../util/artist_api_util';
import ArtistListItem from './artist_list_item';

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
            <div className="artist-index-outter-container">
                <div className="artist-index-container">
                    <h1>{title}</h1>
                    <ul className="artist-index">
                        {artists && artists.map(artist => 
                            <ArtistListItem artist={artist} key={artist.id} />)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ArtistIndex;

