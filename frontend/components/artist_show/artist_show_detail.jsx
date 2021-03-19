import React, { useState } from 'react';
import Modal from '../modal/modal';

const ArtistShowDetail = ({ artist }) => {
    const [modalVis, setModalVis] = useState(false);
    const [modalCom, setModalCom] = useState(null);

    const url = artist.bannerUrl ? artist.bannerUrl : artist.photoUrl;

    const openModal = (item) => {
        setModalCom(
           <div className="artist-detail-popup">
               
           </div>
           )
        ;
        setModalVis(true);
    }

    return (
        <div className="artist-show-details">
            <Modal 
                component={modalCom}
                modalVis={modalVis}
                setModalVis={setModalVis}
                func={setModalVis}
            />

            <div className="artist-banner">
                <img src={url}/>
            </div>
            <div className="artist-mobile-img">
                <img src={artist.photoUrl} />
            </div>

            <h1>{artist.name}</h1>
            <div className="artist-show-bio">
                <p>{artist.description}</p>
            </div>
        </div>
    )
}

export default ArtistShowDetail;


