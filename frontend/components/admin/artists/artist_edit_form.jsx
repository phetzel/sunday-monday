import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { withRouter } from 'react-router-dom';

import ActivityIndicator from '../activity_indicator';
import artistApi from '../../../util/artist_api_util';


const styles = ["audio", "visual"];

const ArtistEditForm = ({ artist, history, setArtist }) => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [style, setStyle] = useState();
    const [instagram, setInstagram] = useState();
    const [photo, setPhoto] = useState();
    const [banner, setBanner] = useState();

    const [lottieVis, setLottieVis] = useState(false);

    useEffect(() => {
        setName(artist.name);
        setDescription(artist.description);
        setStyle(artist.style);
        setInstagram(artist.instagram);
        setPhoto(artist.photo);
        setBanner(artist.banner);
    }, [artist])

    const update = (func) => {
        return e => {
            func(e.currentTarget.value)
        }
    }

    const handlePhoto = (e) => {
        setPhoto(e.currentTarget.files[0]);
    };

    const handleBanner = (e) => {
        setBanner(e.currentTarget.files[0]);
    };

    const handleSubmit = () => {
        setLottieVis(true);

        const formData = new FormData();
        formData.append('artist[id]', artist.id);
        formData.append('artist[name]', name);
        formData.append('artist[description]', description);
        formData.append('artist[style]', style);
        formData.append('artist[instagram]', instagram);
        formData.append('artist[photo]', photo);
        formData.append('artist[banner]', banner);

        artistApi.updateArtist(formData, artist.id)
            .then(res => {
                history.push(`/artists/${res.id}`)
            }, err => {
                setLottieVis(false);
            });
    };

    if (lottieVis) return <ActivityIndicator />;

    return (
        <div className="admin-form-container">
            <h2>{`Edit ${artist.name}`}</h2>

            <div className="admin-form" >
                <label>Name
                    <input 
                        onChange={update(setName)} 
                        value={name}
                        type="text"/>
                </label>

                <label>Description
                    <textarea 
                        onChange={update(setDescription)} 
                        value={description} />
                </label>

                <select onChange={update(setStyle)}>
                    <option value={style}>Style</option>
                    {
                        styles.map((style, idx) => (
                            <option key={idx} value={style}>{style}</option>
                        ))
                    }
                </select>

                <label>Instagram
                    <input 
                        onChange={update(setInstagram)} 
                        value={instagram}
                        type="text"/>
                </label>
                
                <label>Photo
                    <input 
                        onChange={handlePhoto}
                        type="file"/>
                </label>

                <label>Banner
                    <input 
                        onChange={handleBanner}
                        type="file"/>
                </label>

                <button 
                    className="button"
                    onClick={handleSubmit} 
                    title="Edit Artist" 
                    type='submit'>
                    Edit Artist
                </button>
                <button 
                    className="button"
                    onClick={() => setArtist()} 
                    title="New Artist" 
                    type='submit'>
                    New Artist
                </button>
            </ div>

        </div>
    )
}

export default withRouter(ArtistEditForm);
