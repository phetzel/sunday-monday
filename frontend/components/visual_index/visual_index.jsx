import React, { useEffect, useState } from 'react';

import Modal from '../modal/modal';
import visualApi from '../../util/visual_api_util';
import VisualIndexItem from './visual_index_item';

const VisualIndex = props => {
    const [visuals, setVisuals] = useState();
    const [modalVis, setModalVis] = useState(false);
    const [modalCom, setModalCom] = useState(null);

    const fetchVisuals = () => {
        visualApi.fetchVisuals().then(visuals => {
            const visualsArray = Object.values(visuals);
            setVisuals(visualsArray);
        })
    }

    const openModal = (item) => {
        setModalCom(
            <img alt={item.title} src={item.photoUrl} title={item.title}/>)
        ;
        setModalVis(true);
    }

    useEffect(() => {
        fetchVisuals();
    }, []);


    return (
        <div>
            <Modal 
                component={modalCom}
                modalVis={modalVis}
                setModalVis={setModalVis}
                func={setModalVis}
            />

            <div className="visual-index-outter-container">
                <div className="visual-index-container">
                    <h1>Visual Art</h1>
                    <ul className="visual-index">
                        {visuals && visuals.map(visual => 
                            <VisualIndexItem
                                onClick={() => openModal(visual)}
                                key={visual.id} 
                                visual={visual} 
                            />)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default VisualIndex;


{/* <div class="spacemotherdesktopvisual-arts-archive">
  <div class="auto-flex-C61RwL">
    <div class="overlap-group-fhuxN3">
      <div class="rectangle-181"></div>
      <div class="frame-317">
        <div class="frame-314">
          <img
            class="image-5-aSkyyt"
            src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/image-5@2x.svg"
          />
          <div class="overlap-group">
            <div class="frame-310-xOFkN6"></div>
            <div class="expand-1-biXVzO">
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-9@2x.svg"
              />
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-10@2x.svg"
              />
            </div>
            <div
              class="song-name--3637151 valign-text-middle helvetica-regular-normal-blackcurrant-18px border-class-1"
            >
              PHOTO.01
            </div>
          </div>
          <img
            class="image-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/image-3@2x.svg"
          />
          <div class="overlap-group-0a6pZS">
            <div class="frame-310"></div>
            <div class="expand-1">
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-11@2x.svg"
              />
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-12@2x.svg"
              />
            </div>
            <div
              class="song-name--3637151-8nRxV4 valign-text-middle helvetica-regular-normal-blackcurrant-18px border-class-1"
            >
              PHOTO.02
            </div>
          </div>
          <img
            class="image-1-fXRPda"
            src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/image-1@2x.svg"
          />
          <div class="overlap-group-0a6pZS">
            <div class="frame-310"></div>
            <div class="expand-1">
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-11@2x.svg"
              />
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-14@2x.svg"
              />
            </div>
            <div
              class="song-name--3637151-8nRxV4 valign-text-middle helvetica-regular-normal-blackcurrant-18px border-class-1"
            >
              PHOTO.03
            </div>
          </div>
        </div>
        <div class="frame-316">
          <img
            class="image-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/image-1@2x.svg"
          />
          <div class="overlap-group-0a6pZS">
            <div class="frame-310"></div>
            <div class="expand-1">
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-11@2x.svg"
              />
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-14@2x.svg"
              />
            </div>
            <div
              class="song-name--3637151-8nRxV4 valign-text-middle helvetica-regular-normal-blackcurrant-18px border-class-1"
            >
              PHOTO.03
            </div>
          </div>
          <img
            class="image-1-fXRPda"
            src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/image-1@2x.svg"
          />
          <div class="overlap-group-0a6pZS">
            <div class="frame-310"></div>
            <div class="expand-1">
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-11@2x.svg"
              />
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-14@2x.svg"
              />
            </div>
            <div
              class="song-name--3637151-8nRxV4 valign-text-middle helvetica-regular-normal-blackcurrant-18px border-class-1"
            >
              PHOTO.03
            </div>
          </div>
          <img
            class="image-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/image-3@2x.svg"
          />
          <div class="overlap-group-0a6pZS">
            <div class="frame-310"></div>
            <div class="expand-1">
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-11@2x.svg"
              />
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-12@2x.svg"
              />
            </div>
            <div
              class="song-name--3637151-8nRxV4 valign-text-middle helvetica-regular-normal-blackcurrant-18px border-class-1"
            >
              PHOTO.02
            </div>
          </div>
        </div>
        <div class="frame-315">
          <img
            class="image-5-aSkyyt"
            src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/image-5@2x.svg"
          />
          <div class="overlap-group">
            <div class="frame-310-xOFkN6"></div>
            <div class="expand-1-biXVzO">
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-9@2x.svg"
              />
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-10@2x.svg"
              />
            </div>
            <div
              class="song-name--3637151 valign-text-middle helvetica-regular-normal-blackcurrant-18px border-class-1"
            >
              PHOTO.01
            </div>
          </div>
          <img
            class="image-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/image-3@2x.svg"
          />
          <div class="overlap-group-0a6pZS">
            <div class="frame-310"></div>
            <div class="expand-1">
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-11@2x.svg"
              />
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-12@2x.svg"
              />
            </div>
            <div
              class="song-name--3637151-8nRxV4 valign-text-middle helvetica-regular-normal-blackcurrant-18px border-class-1"
            >
              PHOTO.02
            </div>
          </div>
          <img
            class="image-5"
            src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/image-5@2x.svg"
          />
          <div class="overlap-group">
            <div class="frame-310-xOFkN6"></div>
            <div class="expand-1-biXVzO">
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-9@2x.svg"
              />
              <img
                class="vector-ualyZY"
                src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-10@2x.svg"
              />
            </div>
            <div
              class="song-name--3637151 valign-text-middle helvetica-regular-normal-blackcurrant-18px border-class-1"
            >
              PHOTO.01
            </div>
          </div>
        </div>
      </div>
      <div class="media-player-closed">
        <div class="x-710788 valign-text-middle helvetica-regular-normal-soapstone-36px border-class-1">+</div>
      </div>
    </div>
  </div>
  <img
    class="lbfcirclesticker-2"
    src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fcad9c8b9bd4b79e26c628a/img/lbfcirclesticker-2@2x.png"
  />
</div> */}