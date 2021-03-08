import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faList, faPlay, faPause, faVolumeUp } from '@fortawesome/free-solid-svg-icons';     

import MusicContext from '../../context/music_context';
import MusicPlayerQueue from './music_player_queue';
import releaseApi from '../../util/release_api_util';
import VolumeSlider from './volume_slider';
import youtubeApi from '../../util/youtube_util';

 
const MusicPlayer = ({ visible }) => {   
    const { music, setMusic, playing, setPlaying } = useContext(MusicContext);

    const [defaultPlaylist, setDefaultPlaylist] = useState([]);
    const [previous, setPrevious] = useState([]);
    const [queueDisplay, setQueueDisplay] = useState(false);
    const [volumeDisplay, setVolumeDisplay] = useState(false);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        releaseApi.fetchRelease().then(release => {
            // youtubeApi.fetchPlaylistFromYoutube(release.audio, setDefaultPlaylist);
            youtubeApi.fetchYoutubePlaylist(release.audio)
                .then(res => setDefaultPlaylist(res));
        });
    }, [])

    useEffect(() => {
        if (music.length < 1 && defaultPlaylist.length > 0) {
            const newDefault = defaultPlaylist;
            const newMusic = newDefault.shift();
            setMusic([newMusic]);
            setDefaultPlaylist(newDefault);
        }
    })

   const next = () => {
        if (music.length > 1) {

            const newPrevious = previous;
            newPrevious.push(music[0]);
            setPrevious(newPrevious);
        

            const newMusic = music.splice(1);
            setMusic(newMusic);
            setPlaying(true);
        } else if (defaultPlaylist.length > 1) {

            const newPrevious = previous;
            newPrevious.push(music[0]);
            setPrevious(newPrevious);
            
            
            const newDefault = defaultPlaylist;
            const newMusic = newDefault.shift();
            setMusic([newMusic]);
            setPlaying(true);
           setDefaultPlaylist(newDefault);
        }
    }

    const last = () => {
        if (previous.length > 0) {
            const newMusic = music;
            
            newMusic.unshift(previous[previous.length - 1]);
            setMusic(newMusic);

            const newPrevious = previous.slice(0, -1);
            setPrevious(newPrevious);
        }
    }

    const togglePlaying = () => {
        const newPlaying = playing ? false : true;
        setPlaying(newPlaying);
        setPlaying(newPlaying);
    } 

    const toggleQueue = () => {
        const newQueueDisplay = queueDisplay ? false : true;
        setVolumeDisplay(false);
        setQueueDisplay(newQueueDisplay);
    } 

    const toggleVol = () => {
        const newVolDisplay = volumeDisplay ? false : true;
        setQueueDisplay(false);
        setVolumeDisplay(newVolDisplay);
    } 

    const display = visible ? "music-player-container" : "music-player-hidden";
    const playPause = playing ? faPause : faPlay;

    return (
        <div className={display}>
            {music && music.length > 0 &&
                <div className="music-player">
                    <div style={{
                        backgroundImage: `url(${music[0].thumbnails.high.url})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: '140px',
                        marginBottom: '20px',
                        marginTop: '26px',
                        width: '140px'
                    }}/>

                    <h1>{music[0].title}</h1>

                    <ReactPlayer 
                        controls={false}
                        height={'0px'}
                        width={'200px'}
                        onEnded={next}
                        playsinline
                        playing={playing}
                        url={`https://www.youtube.com/watch?v=${music[0].resourceId.videoId}`} 
                        volume={volume} />
                
                    <div className="music-player-controls">
                        <button className="music-player-button-sm" onClick={last}>
                            <FontAwesomeIcon className="music-player-icon" icon={faBackward} />
                        </button>
                        <button className="music-player-button-lg" onClick={togglePlaying}>
                            <FontAwesomeIcon className="music-player-icon" icon={playPause} />
                        </button>
                        <button className="music-player-button-sm" onClick={next}>
                            <FontAwesomeIcon className="music-player-icon" icon={faForward} />
                        </button>
                    </div>
                    <div className="music-player-controls-bottom">
                        <button className="music-player-button-sm" onClick={toggleQueue}>
                            <FontAwesomeIcon className="music-player-icon" icon={faList} />
                        </button>
                        <button className="music-player-button-sm" onClick={toggleVol}>
                            <FontAwesomeIcon className="music-player-icon" icon={faVolumeUp} />
                        </button>
                    </div>
                </div>
            }

            {music && queueDisplay &&
                <MusicPlayerQueue 
                    music={music} 
                    setMusic={setMusic}
                    setPlaying={setPlaying}
                />
            }

            {volumeDisplay &&
                <VolumeSlider 
                    volume={volume}
                    setVolume={setVolume}
                />
            }

        </div>
    ) 
}

export default MusicPlayer;
 
