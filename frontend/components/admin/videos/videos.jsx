import React, { useState } from 'react';

import VideoEditForm from './video_edit_form';
import VideoForm from './video_form';
import VideoList from './video_list';

const Videos = () => {
    const [video, setVideo] = useState();

    const form = video ? (
        <VideoEditForm video={video} setVideo={setVideo} />
    ) : ( 
        <VideoForm /> 
    );

    return (
        <div className="admin">
            {form}
            <VideoList 
                setVideo={setVideo}
            />
        </div>
    )
}


export default Videos;