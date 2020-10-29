import React from 'react';

import VideoForm from './video_form';
import VideoList from './video_list';

const Videos = () => (
    <div className="admin-release">
        <VideoForm />
        <VideoList />
    </div>
)

export default Videos;