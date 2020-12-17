import React, { useEffect, useState } from 'react';
import { Formik } from 'formik'
import { withRouter } from 'react-router-dom';

import ActivityIndicator from '../activity_indicator';
import releaseApi from '../../../util/release_api_util';

const mediums = ["album", "playlist"];

const ReleaseEditForm = ({ history, release, setRelease }) => {
    const [lottieVis, setLottieVis] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [audio, setAudio] = useState();
    const [medium, setMedium] = useState();

    useEffect(() => {
        setTitle(release.title);
        setDescription(release.description);
        setAudio(release.audio);
        setMedium(release.medium);
    }, [release])

    const update = (func) => {
        return e => {
            func(e.currentTarget.value)
        }
    }

    const handleSubmit = () => {
        setLottieVis(true);

        // const formData = new FormData();
        // formData.append('release[title]', release.title);
        // formData.append('release[description]', release.description);
        // formData.append('release[audio]', release.audio);
        // formData.append('release[medium]', release.medium);
        // formData.append('release[photo]', photo);

        let releaseObj = {};
        releaseObj['release'] = {};
        releaseObj['release']['title'] = title;
        releaseObj['release']['description'] = description;
        releaseObj['release']['audio'] = audio;
        releaseObj['release']['medium'] = medium;

        releaseApi.updateRelease(releaseObj, release.id)
            .then(res => {
                history.push(`/music/${res.id}`)
            }, err => {
                setLottieVis(false);
            });
    }

    if (lottieVis) return <ActivityIndicator />;
    
    return (
        <div className="admin-form-container">
            <h2>Edit {release.title}</h2>

            <div className="admin-form" >
                <input 
                    onChange={update(setTitle)} 
                    value={title}
                    type="text"/>

                <textarea 
                    onChange={update(setDescription)}
                    value={description} />

                <input 
                    onChange={update(setAudio)} 
                    value={audio}
                    type="text"/>

                <select onChange={update(setMedium)}>
                    <option value={medium}>Medium</option>
                    {
                        mediums.map((medium, idx) => (
                            <option key={idx} value={medium}>{medium}</option>
                        ))
                    }
                </select>
                

                <div className="admin-release-buttons">
                    <button 
                        className="button"
                        onClick={handleSubmit} 
                        title="Add Release" 
                        type='submit'>
                        Edit Release
                    </button>

                    <button 
                        className="button"
                        onClick={() => setRelease()} 
                        title="New Release" 
                        type='submit'>
                        New Release
                    </button>
                </div>
            </ div>

        </div>
    )
}

export default withRouter(ReleaseEditForm);