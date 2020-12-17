import React, { useEffect, useState } from 'react';
import { Formik } from 'formik'
import { withRouter } from 'react-router-dom';

import ActivityIndicator from '../activity_indicator';
// import appearanceApi from '../../../util/appearance_api_util';
// import Modal from './modal';
import videoApi from '../../../util/video_api_util';

const VideoEditForm = ({ history, setVideo, video }) => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [url, setUrl] = useState();

    const [lottieVis, setLottieVis] = useState(false);

    useEffect(() => {
        setTitle(video.title);
        setDescription(video.description);
        setUrl(video.url);
    }, [video])

    const update = (func) => {
        return e => {
            func(e.currentTarget.value)
        }
    }

    const handleSubmit = () => {
        setLottieVis(true);

        // const formData = new FormData();
        // formData.append('video[title]', video.title);
        // formData.append('video[description]', video.description);
        // formData.append('video[url]', video.url);

        let videoObj = {};
        videoObj['video'] = {};
        videoObj['video']['title'] = title;
        videoObj['video']['description'] = description;
        videoObj['video']['url'] = url;

        videoApi.updateVideo(videoObj, video.id).then(res => {
            history.push(`/videos/${res.id}`)
        }, err => {
            setLottieVis(false);
        });
    }

    if (lottieVis) return <ActivityIndicator />;

    return (
        <div className="admin-form-container">
            {/* <Modal
                appearances={appearances}
                setAppearances={setAppearances}
                setVisible={setVisible}
                visible={visible}/> */}

            <h2>{`Edit ${video.title}`}</h2>
            
            <div className="admin-form" >
                <input 
                    onChange={update(setTitle)} 
                    value={title}
                    type="text"/>

                <textarea 
                    onChange={update(setDescription)}
                    value={description} />

                <input 
                    onChange={update(setUrl)} 
                    value={url}
                    type="text"/>
                
                <div className="admin-release-buttons">
                    <button 
                        className="button"
                        onClick={handleSubmit} 
                        title="Add Video" 
                        type='submit'>
                        Edit Video
                    </button>
                    <button 
                        className="button"
                        onClick={() => setVideo()} 
                        title="New Video" 
                        type='submit'>
                        New Video
                    </button>
                </div>
            </ div>
        </div>
    )
}

export default withRouter(VideoEditForm);