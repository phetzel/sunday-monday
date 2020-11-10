import React, { useState, useEffect } from 'react';

import artistApi from '../../../util/artist_api_util';
import ModalListItem from './modal_list_item';

const Modal = ({painters, setPainters, setVisible, visible}) => {
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
        if(painters.includes(id)) {
            const filtered = painters.filter(p => p !== id)
            setPainters([...filtered]);
        } else {
            setPainters([...painters, id]);
        }
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
                            painters={painters}
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
