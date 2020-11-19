import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import MusicContext from '../../context/music_context';
import MusicListItem from './music_list_item';
import youtubeApi from '../../util/youtube_util';
 
class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: ''
        }
    }

    componentDidMount() {
        const url = `https://www.googleapis.com/youtube/v3/videos?`
            + `key=${window.googleAPIKey}&`
            + `&part=contentDetails`
            + `&id=5qm8PH4xAss`;
        console.log(url);
        
        fetch(url)
            .then(res => console.log(res));
    }

    render() {
        return (
            <div className="music-player">
                <ReactPlayer 
                    controls={true}
                    // config={config}
                    width={'200px'}
                    height={'200px'}
                    // url={playing.audio} />
                    url={'https://music.youtube.com/watch?v=5qm8PH4xAss'} />
            </div>
        )
    }
}

export default MusicPlayer;