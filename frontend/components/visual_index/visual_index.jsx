import React, { useEffect, useState } from 'react';

import Modal from '../modal/modal';
import visualApi from '../../util/visual_api_util';
import VisualIndexItem from './visual_index_item';

const VisualIndex = ({ visuals }) => {
    const [modalVis, setModalVis] = useState(false);
    const [modalCom, setModalCom] = useState(null);

    const [list1, setList1] = useState();
    const [list2, setList2] = useState();
    const [list3, setList3] = useState();

    const seperateLists = arr => {
      let arr1 = [];
      let arr2 = [];
      let arr3 = [];

      let i = 1;
      arr.forEach(ele => {
        if (i === 1) {
          arr1.push(ele);
          i++;
        } else if (i === 2) {
          arr2.push(ele);
          i++;
        } else {
          arr3.push(ele);
          i = 1;
        }
      });

      setList1(arr1);
      setList2(arr2);
      setList3(arr3);
    }

    const openModal = (item) => {
        setModalCom(
            <img alt={item.title} src={item.photoUrl} title={item.title}/>)
        ;
        setModalVis(true);
    }

    useEffect(() => {
        seperateLists(visuals);
    }, []);

    return (
        <div>
            <Modal 
                component={modalCom}
                modalVis={modalVis}
                setModalVis={setModalVis}
                func={setModalVis}
            />

            <div className="visual-index">
                <ul className="visual-index-col">
                  {list1 && list1.map(visual => 
                      <VisualIndexItem
                          onClick={() => openModal(visual)}
                          key={visual.id} 
                          visual={visual} 
                      />)}
                </ul>
                <ul className="visual-index-col">
                  {list2 && list2.map(visual => 
                      <VisualIndexItem
                          onClick={() => openModal(visual)}
                          key={visual.id} 
                          visual={visual} 
                      />)}
                </ul>
                <ul className="visual-index-col">
                  {list3 && list3.map(visual => 
                      <VisualIndexItem
                          onClick={() => openModal(visual)}
                          key={visual.id} 
                          visual={visual} 
                      />)}
                </ul>
            </div>
        </div>

    )
}

export default VisualIndex;
