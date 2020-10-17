import React from 'react';
import { Formik } from 'formik'
import { withRouter } from 'react-router-dom';

import releasesApi from '../../../util/release_api_util';


const ReleaseForm = ({history}) => {
    const initialValues = {
        title: "",
        description: "",
        spotify: "",
    }



    const handleSubmit = (release) => {
        releasesApi.createRelease(release)
            .then(res => history.push(`/music/${res.id}`));

    }

    return (
        <div className="admin-release-form-container">
            <h2 className="p-color">Add a New Item</h2>
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