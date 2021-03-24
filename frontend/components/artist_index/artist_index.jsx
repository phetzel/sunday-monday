import React, { useEffect, useState } from 'react';

import artistApi from '../../util/artist_api_util';
import ArtistListItem from './artist_list_item';

const ArtistIndex = ({style, title}) => {
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [more, setMore] = useState();

    const fetchArtists = () => {
        const type = {style: style};
        const data = { type, page };

        artistApi.fetchArtists(data).then(response => {
            // setArtists(response);
                const artistArray = Object.values(response);
                setArtists([...artists, ...artistArray]);
                setLoading(false);
                artistArray.length < 6 ? setMore(false) : setMore(true);
        })
    }

    useEffect(() => {
        fetchArtists();
    }, [page]);

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

                    { more && 
                        <div className="artist-show-button" onClick={() => setPage(page + 1)}>
                            <h6>MORE</h6>               
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ArtistIndex;

