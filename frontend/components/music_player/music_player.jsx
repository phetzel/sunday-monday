import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import MusicContext from '../../context/music_context';
import youtubeApi from '../../util/youtube_util';

 
const MusicPlayer = () => {
    useEffect(() => {
        youtubeApi.fetchPlaylistFromYoutube('PLm2X5PEC8_0xzwUOygMsTdIDB8gSWHQBM');
    })

    return (
        <div className="music-player">
            <ReactPlayer 
                controls={true}
                width={'200px'}
                height={'200px'}
                url={'https://music.youtube.com/watch?v=5qm8PH4xAss'} />
        </div>
    )

}

export default MusicPlayer;