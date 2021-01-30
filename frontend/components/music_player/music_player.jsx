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
    } 

    const toggleQueue = () => {
        const newQueueDisplay = queueDisplay ? false : true;
        setQueueDisplay(newQueueDisplay);
    } 

    const toggleVol = () => {
    const newVolDisplay = volumeDisplay ? false : true;
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
 
// class MusicPlayer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             defaultPlaylist: [],
//             previous: [],
//             queueDisplay: false,
//             volumeDisplay: false
//         }

//         this.next = this.next.bind(this);
//         this.last = this.last.bind(this);
//         this.setDefault = this.setDefault.bind(this);
//         this.togglePlaying = this.togglePlaying.bind(this);
//         this.toggleQueue = this.toggleQueue.bind(this);
//         this.toggleVol = this.toggleVol.bind(this);
//     }

//     componentDidMount() {
//         releaseApi.fetchRelease().then(release => {
//             youtubeApi.fetchPlaylistFromYoutube(release.audio, this.setDefault);
//         })
//     }

//     componentDidUpdate() {
//         const { music, setMusic } = this.props;
//         if (music.length < 1) this.next();
//     }


//     setDefault(songs) {
//         this.setState({ defaultPlaylist: songs})
//     }

//     next() {
//         const { music, setMusic, setPlaying } = this.props;
//         const { previous, defaultPlaylist } = this.state;

//         if (music.length > 1) {
//             if (previous.length > 0) {
//                 const newPrevious = previous;
//                 newPrevious.push(music[0]);
//                 this.setState({ previous: newPrevious });
//             }

//             const newMusic = music.splice(1);
//             setMusic(newMusic);
//             setPlaying(true);
//         } else if (defaultPlaylist.length > 1) {
//             if (previous.length > 0) {
//                 const newPrevious = previous;
//                 newPrevious.push(music[0]);
//                 this.setState({ previous: newPrevious });
//             }
            
//             const newDefault = defaultPlaylist;
//             const newMusic = newDefault.shift();
//             setMusic([newMusic]);
//             setPlaying(true);
//             this.setState({ defaultPlaylist: newDefault });
//         }
//     }

//     last() {
//         const { music, setMusic } = this.props;
//         const { previous } = this.state;
//         console.log(previous);

//         if (previous.length > 0) {
//             const newMusic = music;
            
//             newMusic.unshift(previous[previous.length - 1]);
//             setMusic(newMusic);

//             const newPrevious = previous.slice(0, -1);
//             this.setState({ previous: newPrevious });
//         }
//     }

//     togglePlaying() {
//         const { playing, setPlaying } = this.props;
//         const newPlaying = playing ? false : true;
//         setPlaying(newPlaying);
//     } 

//     toggleQueue() {
//         const { queueDisplay } = this.state;
//         const newQueueDisplay = queueDisplay ? false : true;
//         this.setState({ queueDisplay: newQueueDisplay });
//     } 

//     toggleVol() {
//         const { volumeDisplay } = this.state;
//         const newVolDisplay = volumeDisplay ? false : true;
//         this.setState({ volumeDisplay: newVolDisplay });
//     } 

//     render() {
//         const { music, setMusic, playing, setPlaying, visible } = this.props;
//         const { queueDisplay, volumeDisplay } = this.state;

//         const display = visible ? "music-player-container" : "music-player-hidden";

//         const playPause = playing ? faPause : faPlay;

//         return (
//             <div className={display}>
//                 {music && music.length > 0 &&
//                     <div className="music-player">
//                         <div style={{
//                             backgroundImage: `url(${music[0].thumbnails.high.url})`,
//                             backgroundPosition: 'center',
//                             backgroundSize: 'cover',
//                             height: '140px',
//                             marginBottom: '20px',
//                             marginTop: '26px',
//                             width: '140px'
//                         }}/>


//                         {/* <marquee scrollamount="2"> */}
//                             <h1>{music[0].title}</h1>
//                         {/* </marquee> */}

//                         <ReactPlayer 
//                             controls={false}
//                             height={'0px'}
//                             width={'200px'}
//                             onEnded={this.next}
//                             playing={playing}
//                             url={`https://www.youtube.com/watch?v=${music[0].resourceId.videoId}`} />
                    
//                         <div className="music-player-controls">
//                             <button className="music-player-button-sm" onClick={this.last}>
//                                 <FontAwesomeIcon className="music-player-icon" icon={faBackward} />
//                             </button>
//                             <button className="music-player-button-lg" onClick={this.togglePlaying}>
//                                 <FontAwesomeIcon className="music-player-icon" icon={playPause} />
//                             </button>
//                             <button className="music-player-button-sm" onClick={this.next}>
//                                 <FontAwesomeIcon className="music-player-icon" icon={faForward} />
//                             </button>
//                         </div>
//                         <div className="music-player-controls-bottom">
//                             <button className="music-player-button-sm" onClick={this.toggleQueue}>
//                                 <FontAwesomeIcon className="music-player-icon" icon={faList} />
//                             </button>
//                             <button className="music-player-button-sm" onClick={this.toggleVol}>
//                                 <FontAwesomeIcon className="music-player-icon" icon={faVolumeUp} />
//                             </button>
//                         </div>
//                     </div>
//                 }

//                 {music && queueDisplay &&
//                     <MusicPlayerQueue 
//                         music={music} 
//                         setMusic={setMusic}
//                         setPlaying={setPlaying}
//                     />
//                 }

//                 {volumeDisplay &&
//                     <VolumeSlider />
//                 }

//         </div>
//         )
//     }
// }

// export default MusicPlayer;