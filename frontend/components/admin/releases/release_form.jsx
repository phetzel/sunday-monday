import React, { useState } from 'react';
import { Formik } from 'formik'
import { withRouter } from 'react-router-dom';

import Modal from './modal';
import featureApi from '../../../util/feature_api_util';
import releasesApi from '../../../util/release_api_util';

const mediums = ["album", "playlist"];

const ReleaseForm = ({history}) => {
    const [photo, setPhoto] = useState();
    const [features, setFeatures] = useState([]);
    const [visible, setVisible] = useState(false);

    const initialValues = {
        title: "",
        description: "",
        spotify: "",
        medium: "album"
    }

    const handleFile = (e) => {
        setPhoto(e.currentTarget.files[0]);
    };

    const handleSubmit = (release) => {
        const formData = new FormData();

        formData.append('release[title]', release.title);
        formData.append('release[description]', release.description);
        formData.append('release[spotify]', release.spotify);
        formData.append('release[medium]', release.medium);
        formData.append('release[photo]', photo);

        releasesApi.createRelease(formData).then(res => {
            features.forEach(feature => {
                const newFeature = { release_id: res.id, artist_id: feature };
                featureApi.createFeature(newFeature);
            });

            history.push(`/music/${res.id}`)
        });
    }

    const handleModal = (val) => setVisible(val);
    

    return (
        <div className="admin-release-form-container">
            <Modal
                features={features}
                setFeatures={setFeatures}
                setVisible={setVisible}
                visible={visible}/>

            <h2 className="p-color">Add New Music</h2>
            
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                { ({ handleChange, handleSubmit}) => (
                    <div className="admin-release-form" >
                        <input 
                            onChange={handleChange("title")} 
                            placeholder="Title"
                            type="text"/>

                        <textarea 
                            onChange={handleChange("description")}
                            placeholder="Description" />

                        <input 
                            onChange={handleChange("spotify")} 
                            placeholder="Spotify"
                            type="text"/>

                        <select onChange={handleChange("medium")}>
                            <option value='album'>Medium</option>
                            {
                                mediums.map((medium, idx) => (
                                    <option key={idx} value={medium}>{medium}</option>
                                ))
                            }
                        </select>
                        
                        <input 
                            onChange={handleFile}
                            type="file"/>

                        <div className="admin-release-buttons">
                            <button 
                                className="button"
                                onClick={handleSubmit} 
                                title="Add Release" 
                                type='submit'>
                                Add Release
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

export default withRouter(ReleaseForm);