import React, { useState } from "react";
import { Formik } from "formik";
import { withRouter } from 'react-router-dom';

import artistApi from '../../../util/artist_api_util';


const styles = ["audio", "visual"];

const ArtistForm = ({history}) => {
    const [photo, setPhoto] = useState();

    const initialValues = {
        name: "",
        description: "",
        photo: '',
        style: 'audio'
    }

    const handleFile = (e) => {
        setPhoto(e.currentTarget.files[0]);
    };

    const handleSubmit = (artist) => {
        const formData = new FormData();
        
        formData.append('artist[name]', artist.name);
        formData.append('artist[description]', artist.description);
        formData.append('artist[style]', artist.style);
        formData.append('artist[photo]', photo);
        artistApi.createArtist(formData)
            .then(res => history.push(`/artists/${res.id}`));
    };

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

                        <select onChange={handleChange("style")}>
                            <option value='audio'>Style</option>
                            {
                                styles.map((style, idx) => (
                                    <option key={idx} value={style}>{style}</option>
                                ))
                            }
                        </select>

                        <input 
                            onChange={handleFile}
                            type="file"/>

                        <button 
                            className="button"
                            onClick={handleSubmit} 
                            title="Add Artist" 
                            ype='submit'>
                            Add Artist
                        </button>
                    </ div>
                )}

            </Formik>
        </div>
    )
}

export default withRouter(ArtistForm);
