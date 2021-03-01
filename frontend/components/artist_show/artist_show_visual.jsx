import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import Modal from '../modal/modal';
import VisualIndexItem from '../visual_index/visual_index_item';

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
        <div>
            <Modal 
                component={modalCom}
                modalVis={modalVis}
                func={setModalVis}
            />

            <h1>Visual Art</h1>
            <ul className="list">
                {visuals && visualsSlice.map(visual => (
                    <VisualIndexItem 
                        visual={visual} 
                        onClick={() => openModal(visual)} />
                ))}
            </ul>

            <div className="artist-show-button" onClick={handleAllClick}>
                <h6>VIEW ALL VISUALS</h6>               
            </div>
        </div>
    )
}

export default withRouter(ArtistShowVisual);