import React, { useEffect, useState } from 'react';
import { Formik } from 'formik'
import { withRouter } from 'react-router-dom';

import ActivityIndicator from '../activity_indicator';
import visualApi from '../../../util/visual_api_util';

const VisualEditForm = ({ history, visual, setVisual }) => {
    // const [photo, setPhoto] = useState();
    const [lottieVis, setLottieVis] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        setTitle(visual.title);
        setDescription(visual.description);
    }, [visual])

    const update = (func) => {
        return e => {
            func(e.currentTarget.value)
        }
    }

    const handleFile = (e) => {
        setPhoto(e.currentTarget.files[0]);
    };

    const handleSubmit = () => {
        setLottieVis(true);

        // const formData = new FormData();
        // formData.append('visual[title]', visual.title);
        // formData.append('visual[description]', visual.description);
        // formData.append('visual[photo]', photo);

        let visualObj = {};
        visualObj['visual'] = {};
        visualObj['visual']['title'] = title;
        visualObj['visual']['description'] = description;

        visualApi.updateVisual(visualObj, visual.id).then(res => {
            history.push(`/visuals/${res.id}`)
        }, err => {
            setLottieVis(false);
        });
    }

    if (lottieVis) return <ActivityIndicator />;

    return (
        <div className="admin-form-container">
            {/* <Modal
                painters={painters}
                setPainters={setPainters}
                setVisible={setVisible}
                visible={visible}/> */}

            <h2>{`Edit ${visual.title}`}</h2>  

            <div className="admin-form" >
                <input 
                    onChange={update(setTitle)} 
                    value={title}
                    type="text"/>

                <textarea 
                    onChange={update(setDescription)}
                    value={description} />
{/* 
                <input 
                    onChange={handleFile}
                    type="file"/> */}
                
                <div className="admin-release-buttons">
                    <button 
                        className="button"
                        onClick={handleSubmit} 
                        title="Edit Video" 
                        type='submit'>
                        Edit Visual
                    </button>

                    <button 
                        className="button"
                        onClick={() => setVisual()} 
                        title="New Visual" >
                        New Visual
                    </button>
                </div>
            </ div>
        </div>
    )
}

export default withRouter(VisualEditForm);