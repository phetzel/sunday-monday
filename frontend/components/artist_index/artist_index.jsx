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
            <div className="content-container">
                <div className="content">

                    <div className="header-container">
                        <div className="header">
                            <h1><span>{title}</span></h1>
                        </div>
                    </div>

                    <div className="header-rect" />

                    <ul className="list">
                        {artists && artists.map(artist => 
                            <ArtistListItem artist={artist} key={artist.id} />)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ArtistIndex;

