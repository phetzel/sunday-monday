import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import MusicContext from '../../context/music_context';
import MusicPlayerQueue from './music_player_queue';
import releaseApi from '../../util/release_api_util';
import youtubeApi from '../../util/youtube_util';

 
const MusicPlayer = ({ music, setMusic }) => {
    const fetchRelease = () => {
        releaseApi.fetchRelease().then(release => {
            youtubeApi.fetchPlaylistFromYoutube(release.audio, setMusic);
        })
    }

    useEffect(() => {
        fetchRelease();
    }, []);

    if (music) console.log(music[0]);

    return (
        <div className="music-player-container">
            {music &&
                <ReactPlayer 
                    controls={true}
                    width={'200px'}
                    height={'200px'}
                    url={`https://www.youtube.com/watch?v=${music[0].resourceId.videoId}`} />  
            }

            {music && music.length > 1 && 
                <MusicPlayerQueue 
                    music={music} 
                    setMusic={setMusic}
                />
            }

        </div>
    )

}

export default MusicPlayer;