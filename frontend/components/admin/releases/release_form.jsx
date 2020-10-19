import React, { useState } from 'react';
import { Formik } from 'formik'
import { withRouter } from 'react-router-dom';

import releasesApi from '../../../util/release_api_util';


const ReleaseForm = ({history}) => {
    const [photo, setPhoto] = useState();

    const initialValues = {
        title: "",
        description: "",
        spotify: "",
    }

    const handleFile = (e) => {
        setPhoto(e.currentTarget.files[0]);
    };

    const handleSubmit = (release) => {
        const formData = new FormData();

        formData.append('release[title]', release.title);
        formData.append('release[description]', release.description);
        formData.append('release[spotify]', release.spotify);
        formData.append('release[photo]', photo);

        releasesApi.createRelease(formData)
            .then(res => history.push(`/music/${res.id}`));

    }

    return (
        <div className="admin-release-form-container">
            <h2 className="p-color">Add a New Album</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                // validationSchema={validationSchema}
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
                        
                        <input 
                            onChange={handleFile}
                            type="file"/>


                        <button 
                            className="button"
                            onClick={handleSubmit} 
                            title="Add Release" 
                            ype='submit'>
                            Add Release
                        </button>
                    </ div>
                )}

            </Formik>
        </div>
    )
}

export default withRouter(ReleaseForm);