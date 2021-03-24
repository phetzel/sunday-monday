import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import videoApi from '../../util/video_api_util';
import VideoIndex from './video_index';

const AllVideosIndex = props => {
    return (
        <div>
            <VideoIndex title={"All Videos"} />
        </div>
    )
}

export default AllVideosIndex;