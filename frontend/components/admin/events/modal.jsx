import React, { useState, useEffect } from 'react';

import artistApi from '../../../util/artist_api_util';
import ModalListItem from './modal_list_item';

const Modal = ({performs, setPerforms, setVisible, visible}) => {
    const [artists, setArtists] = useState();

    const fetchArtists = () => {
        artistApi.fetchArtists().then(artists => {
            console.log(artists);
            const artistsArray = Object.values(artists);
            setArtists(Array.from(artistsArray));
        })
    }

    useEffect(() => {
        fetchArtists();
    }, []);

    const handleClick = (id) => {
        if(performs.includes(id)) {
            const filtered = performs.filter(f => f !== id)
            setPerforms([...filtered]);
        } else {
            setPerforms([...performs, id]);
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
                            performs={performs}
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
