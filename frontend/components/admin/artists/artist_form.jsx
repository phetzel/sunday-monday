import React from "react";
import { Formik } from "formik";

import artistApi from '../../../util/artist_api_util';


const ArtistForm = (props) => {
    const initialValues = {
        name: "",
        description: "",
    }

    const handleSubmit = (artist) => {
        artistApi.createArtist(artist);
    }

    return (
        <div className="admin-artist-form-container">
            <h2 className="p-color">Add a New Artist</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                // validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit}) => (
                    <div className="admin-artist-form" >
                        <input 
                            onChange={handleChange("name")} 
                            placeholder="Name"
                            type="text"/>

                        <textarea 
                            onChange={handleChange("description")}
                            placeholder="Biography" />

                        <button onClick={handleSubmit} title="Add Artist" type='submit'>
                            Add Artist
                        </button>
                    </ div>
                )}

            </Formik>
        </div>
    )
}

export default ArtistForm;
