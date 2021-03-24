import React, { useEffect, useState } from 'react';

import Modal from '../modal/modal';
import artistApi from '../../util/artist_api_util';
import visualApi from '../../util/visual_api_util';
import VisualIndexItem from './visual_index_item';

const VisualIndex = ({ id }) => {
    const [modalVis, setModalVis] = useState(false);
    const [modalCom, setModalCom] = useState(null);
    const [artsit, setArtist] = useState();
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
        if (id) {
            artistApi.fetchArtist(id).then(artist => {
                setVisuals(artist.visuals);
            });
        } else {
            setLoading(true);
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
      <div>
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
                <div className="artist-show-button" onClick={() => setPage(page + 1)}>
                    <h6>MORE</h6>               
                </div>
            }
      </div>

    )
}

export default VisualIndex;
