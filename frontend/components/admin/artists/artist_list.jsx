import React, { useState, useEffect } from 'react';

import artistApi from '../../../util/artist_api_util';

const ArtistsList = () => {
    const [artists, setArtists] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const fetchArtists = () => {
        setLoading(true);
        artistApi.fetchArtists().then(artists => {
            const artistsArray = Object.values(artists);
            setLoading(false);
            setArtists(Array.from(artistsArray));
        }, err => {
            setError(err)
        })
    }

    const deleteArtist = (id) => {
        artistApi.deleteArtist(id).then(artists => {
            const artistsArray = Object.values(artists);
            setArtists(Array.from(artistsArray));
        });
    }

    useEffect(() => {
        fetchArtists();
    }, []);

    return (
        <div className="admin-list">
            <h2 className="p-color">Edit Artists</h2>
            <ul>
                { artists &&
                    artists.map(artist => (
                    <li key={artist.id}>
                        <p>{artist.name}</p>
                        <i onClick={() => deleteArtist(artist.id)}>&#128465;</i>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ArtistsList;