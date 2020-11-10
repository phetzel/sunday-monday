import React, { useState } from 'react';
import { Formik } from 'formik'
import { withRouter } from 'react-router-dom';

import painterApi from '../../../util/painter_api_util';
import Modal from './modal';
import visualApi from '../../../util/visual_api_util';

const VisualForm = ({history}) => {
    const [painters, setPainters] = useState([]);
    const [visible, setVisible] = useState(false);
    const [photo, setPhoto] = useState();

    const initialValues = {
        title: "",
        description: ""
    }

    const handleFile = (e) => {
        setPhoto(e.currentTarget.files[0]);
    };

    const handleSubmit = (visual) => {
        const formData = new FormData();

        formData.append('visual[title]', visual.title);
        formData.append('visual[description]', visual.description);
        formData.append('visual[photo]', photo);

        visualApi.createVisual(formData).then(res => {
            painters.forEach(painter => {
                const newPainter = { visual_id: res.id, artist_id: painter };
                painterApi.createPainter(newPainter);
            });

            history.push(`/visuals/${res.id}`)
        });
    }

    const handleModal = (val) => setVisible(val);

    return (
        <div className="admin-video-form-container">
            <Modal
                painters={painters}
                setPainters={setPainters}
                setVisible={setVisible}
                visible={visible}/>

            <h2 className="p-color">Add New Visual Art</h2>
            
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                { ({ handleChange, handleSubmit}) => (
                    <div className="admin-video-form" >
                        <input 
                            onChange={handleChange("title")} 
                            placeholder="Title"
                            type="text"/>

                        <textarea 
                            onChange={handleChange("description")}
                            placeholder="Description" />

                        <input 
                            onChange={handleFile}
                            type="file"/>
                        
                        <div className="admin-release-buttons">
                            <button 
                                className="button"
                                onClick={handleSubmit} 
                                title="Add Video" 
                                type='submit'>
                                Add Visual
                            </button>

                            <button 
                                className="button"
                                onClick={() => handleModal('true')} 
                                title="Add Artists" >
                                Add Artists
                            </button>
                        </div>
                    </ div>
                )}

            </Formik>
        </div>
    )
}

export default withRouter(VisualForm);