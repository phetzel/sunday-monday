import React, { useState, useEffect } from 'react';

import artistApi from '../../../util/artist_api_util';
import ModalListItem from './modal_list_item';

const Modal = ({features, setFeatures, setVisible, visible}) => {
    const [artists, setArtists] = useState();

    const fetchArtists = () => {
        artistApi.fetchArtists().then(artists => {
            const artistsArray = Object.values(artists);
            setArtists(Array.from(artistsArray));
        })
    }

    useEffect(() => {
        fetchArtists();
    }, []);

    const handleClick = (id) => {
        if(features.includes(id)) {
            const filtered = features.filter(f => f !== id)
            setFeatures([...filtered]);
        } else {
            setFeatures([...features, id]);
        }
        console.log(features);
    }

    if (!visible) return null;

    return (
        <div className="admin-feature-modal-container" >
            <div className="admin-feature-modal">
                <h3 className="p-color">Add Artists</h3>
                <ul>
                    {artists && artists.map(artist => 
                        <ModalListItem 
                            artist={artist}
                            features={features}
                            key={artist.id}
                            handleClick={handleClick}/>
                    )}
                </ul>
                <button 
                    className="button"
                    onClick={() => setVisible(false)}>Close</button>
            </div>
        </div>
    )
}

export default Modal;
