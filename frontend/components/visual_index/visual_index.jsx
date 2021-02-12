import React, { useEffect, useState } from 'react';

import Modal from '../modal/modal';
import visualApi from '../../util/visual_api_util';
import VisualIndexItem from './visual_index_item';

const VisualIndex = ({ visuals }) => {
    const [modalVis, setModalVis] = useState(false);
    const [modalCom, setModalCom] = useState(null);

    const openModal = (item) => {
        setModalCom(
            <img alt={item.title} src={item.photoUrl} title={item.title}/>)
        ;
        setModalVis(true);
    }

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
      </div>

    )
}

export default VisualIndex;
