import React, { useEffect, useState } from 'react';

import ActivityIndicator from '../activity_indicator/activity_indicator';
import artistApi from '../../util/artist_api_util';
import ArtistListItem from './artist_list_item';

const ArtistIndex = ({style, title}) => {
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [more, setMore] = useState();

    const fetchArtists = () => {
        setLoading(true);
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

    const infinity = loading ? 
        <ActivityIndicator /> :
        <div className="list-show-button" onClick={() => setPage(page + 1)}>
            <h6>MORE</h6>               
        </div>;


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
                        infinity
                    }
                </div>
            </div>
        </div>
    )
}

export default ArtistIndex;

