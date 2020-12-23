import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import Modal from '../modal/modal';

const ArtistShowVisual = ({ artist_id, history, visuals }) => {
    const [modalVis, setModalVis] = useState(false);
    const [modalCom, setModalCom] = useState(null);

    const openModal = (item) => {
        setModalCom(
            <img alt={item.title} src={item.photoUrl} title={item.title}/>)
        ;
        setModalVis(true);
    }

    const handleAllClick = () => {
        history.push(`/artists/${artist_id}/visuals`)
    }

    const visualsSlice = visuals.slice(0,3);

    return (
        <div className="artist-show-visuals-container">
            <Modal 
                component={modalCom}
                modalVis={modalVis}
                func={setModalVis}
            />

            <h1>Visual Art</h1>
            <ul className="visual-index">
                {visuals && visualsSlice.map(visual => (
                    <li className="visual-list-item" key={visual.id}>
                        <img alt={visual.title} src={visual.photoUrl} title={visual.title}/>
                        <div className="visual-list-item-bottom">
                            <h6>{visual.title}</h6>
                            <FontAwesomeIcon 
                                className="visual-list-item-icon" 
                                icon={faExternalLinkAlt} 
                                onClick={() => openModal(visual)}
                            />

                        </div>
                    </li>
                ))}
            </ul>

            <div 
                className="artist-show-visuals-all-container"
                onClick={handleAllClick}>
                <div className="artist-show-music-all">
                    <div className="artist-show-music-all-content">
                        View All Visuals
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ArtistShowVisual);