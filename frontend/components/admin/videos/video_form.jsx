import React, { useState } from 'react';
import { Formik } from 'formik'
import { withRouter } from 'react-router-dom';

import ActivityIndicator from '../activity_indicator';
import appearanceApi from '../../../util/appearance_api_util';
import Modal from './modal';
import videoApi from '../../../util/video_api_util';

const VideoForm = ({history}) => {
    const [appearances, setAppearances] = useState([]);
    const [visible, setVisible] = useState(false);
    const [lottieVis, setLottieVis] = useState(false);

    const initialValues = {
        title: "",
        description: "",
        url: ""
    }

    const handleSubmit = (video) => {
        setLottieVis(true);
        const formData = new FormData();

        formData.append('video[title]', video.title);
        formData.append('video[description]', video.description);
        formData.append('video[url]', video.url);

        videoApi.createVideo(formData).then(res => {
            appearances.forEach(appearance => {
                const newAppearance = { video_id: res.id, artist_id: appearance };
                appearanceApi.createAppearance(newAppearance);
            });

            history.push(`/videos/${res.id}`)
        }, err => {
            setLottieVis(false);
        });
    }

    const handleModal = (val) => setVisible(val);

    if (lottieVis) return <ActivityIndicator />;

    return (
        <div className="admin-form-container">
            <Modal
                appearances={appearances}
                setAppearances={setAppearances}
                setVisible={setVisible}
                visible={visible}/>

            <h2 className="p-color">Add New Video</h2>
            
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                { ({ handleChange, handleSubmit}) => (
                    <div className="admin-form" >
                        <input 
                            onChange={handleChange("title")} 
                            placeholder="Title"
                            type="text"/>

                        <textarea 
                            onChange={handleChange("description")}
                            placeholder="Description" />

                        <input 
                            onChange={handleChange("url")} 
                            placeholder="Youtube"
                            type="text"/>
                        
                        <div className="admin-release-buttons">
                            <button 
                                className="button"
                                onClick={handleSubmit} 
                                title="Add Video" 
                                type='submit'>
                                Add Video
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

export default withRouter(VideoForm);