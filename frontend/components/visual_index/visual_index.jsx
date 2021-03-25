import React, { useEffect, useState } from 'react';

import Modal from '../modal/modal';
import artistApi from '../../util/artist_api_util';
import visualApi from '../../util/visual_api_util';
import VisualIndexItem from './visual_index_item';

const VisualIndex = ({ id, title }) => {
    const [modalVis, setModalVis] = useState(false);
    const [modalCom, setModalCom] = useState(null);
    const [artist, setArtist] = useState();
    const [visuals, setVisuals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [more, setMore] = useState();

    const openModal = (item) => {
        setModalCom(
            <img alt={item.title} src={item.photoUrl} title={item.title}/>)
        ;
        setModalVis(true);
    }

    const fetchVisuals = () => {
        setLoading(true);

        if (id) {
            if (!artist) {
                artistApi.fetchArtist(id).then(artist => {
                    setArtist(artist);
                    const newVisuals = artist.visuals.slice(page * 6, (page * 6) + 6);
                    setVisuals([...visuals, ...newVisuals]);
                    setLoading(false);
                    newVisuals.length < 6 ? setMore(false) : setMore(true);
                });
            } else {
                const newVisuals = artist.visuals.slice(page * 6, (page * 6) + 6);
                setVisuals([...visuals, ...newVisuals]);
                setLoading(false);
                newVisuals.length < 6 ? setMore(false) : setMore(true);
            }

        } else {
            const obj = { page: page };
            visualApi.fetchVisuals(obj).then(response => {
                const visualsArray = Object.values(response);
                setVisuals([...visuals, ...visualsArray]);
                setLoading(false);
                visualsArray.length < 6 ? setMore(false) : setMore(true);
            })
        }
    }

    useEffect(() => {
        fetchVisuals();
    }, [page]);

    return (
        <div className="content-container">
            <div className="content">

                <div className="header-container">
                    <div className="header">
                    <h1><span>{title}</span></h1>
                    </div>
                </div>
                
                <div className="header-rect" />

                <Modal 
                    component={modalCom}
                    modalVis={modalVis}
                    setModalVis={setModalVis}
                    func={setModalVis}
                />

                <ul className="list">
                    { visuals && visuals.map(visual => 
                    <VisualIndexItem
                        onClick={() => openModal(visual)}
                        key={visual.id}
                        visual={visual} />
                    )}
                </ul>

                { more && 
                    <div className="list-show-button" onClick={() => setPage(page + 1)}>
                        <h6>MORE</h6>               
                    </div>
                }
            </div>
        </div>

    )
}

export default VisualIndex;
