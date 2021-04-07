import React, { useState } from 'react';
import Modal from '../modal/modal';

const ArtistShowDetail = ({ artist }) => {
    const [modalVis, setModalVis] = useState(false);
    const [modalCom, setModalCom] = useState(null);

    const url = artist.bannerUrl ? artist.bannerUrl : artist.photoUrl;

    const openModal = () => {
        setModalCom(
           <div className="artist-detail-popup">
               <p>{artist.description}</p>
           </div>
           )
        ;
        setModalVis(true);
    }

    return (
        <div className="artist-show-details">
            <div className="artist-show-mobile">
                <Modal 
                    component={modalCom}
                    modalVis={modalVis}
                    setModalVis={setModalVis}
                    func={setModalVis}
                />
            </div>

            <div className="artist-banner">
                <img src={url}/>
            </div>
            <div className="artist-mobile-img">
                <img src={artist.photoUrl} />
            </div>

            <h1>{artist.name}</h1>
            <div className="artist-show-bio" onClick={openModal}>
                <p>{artist.description}</p>
            </div>
        </div>
    )
}

export default ArtistShowDetail;


