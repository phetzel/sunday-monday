import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import MusicContext from '../../context/music_context';
import MusicPlayerQueue from './music_player_queue';
import releaseApi from '../../util/release_api_util';
import youtubeApi from '../../util/youtube_util';

 
class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previous: [],
            queueDisplay: false
        }

        this.next = this.next.bind(this);
        this.last = this.last.bind(this);
        this.togglePlaying = this.togglePlaying.bind(this);
        this.toggleQueue = this.toggleQueue.bind(this);
    }

    componentDidMount() {
        const { setMusic } = this.props;
        releaseApi.fetchRelease().then(release => {
            youtubeApi.fetchPlaylistFromYoutube(release.audio, setMusic);
        })
    }



    next() {
        const { music, setMusic, setPlaying } = this.props;
        const { previous } = this.state;

        if (music.length > 1) {
            const newPrevious = previous;
            newPrevious.push(music[0]);
            const newMusic = music.splice(1);

            setMusic(newMusic);
            setPlaying(true);
            this.setState({ previous: newPrevious });
        }
    }

    last() {
        const { music, setMusic } = this.props;
        const { previous } = this.state;

        if (previous.length > 0) {
            const newMusic = music;
            
            newMusic.unshift(previous[previous.length - 1]);
            setMusic(newMusic);

            const newPrevious = previous.slice(0, -1);
            this.setState({ previous: newPrevious });
        }
    }

    togglePlaying() {
        const { playing, setPlaying } = this.props;
        const newPlaying = playing ? false : true;
        setPlaying(newPlaying);
    } 

    toggleQueue() {
        const { queueDisplay } = this.state;
        const newQueueDisplay = queueDisplay ? false : true;
        this.setState({ queueDisplay: newQueueDisplay});
    } 

    render() {
        const { music, setMusic, playing, setPlaying } = this.props;
        const { queueDisplay } = this.state;

        return (
            <div className="music-player-container">
                {music &&
                    <div className="music-player">
                        <ReactPlayer 
                            controls={true}
                            width={'200px'}
                            height={'200px'}
                            onEnded={this.next}
                            playing={playing}
                            url={`https://www.youtube.com/watch?v=${music[0].resourceId.videoId}`} />
                    
                        <div className="music-player-controls">
                            <button onClick={this.last}>Back</button>
                            <button onClick={this.togglePlaying}>Play/Pause</button>
                            <button onClick={this.next}>Next</button>
                            <button onClick={this.toggleQueue}>Queue</button>
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

        </div>
        )
    }

}
// const MusicPlayer = ({ music, setMusic }) => {
//     const [playing, setPlaying] = useState(false);
//     const [previous, setPrevious] = useState([]);
//     const [queueDisplay, setQueueDisplay] = useState(false);

//     const fetchRelease = () => {
//         releaseApi.fetchRelease().then(release => {
//             youtubeApi.fetchPlaylistFromYoutube(release.audio, setMusic);
//         })
//     }

//     useEffect(() => {
//         fetchRelease();
//     }, []);

//     const next = () => {
//         if (music.length > 1) {
//             const newPrevious = previous;
//             newPrevious.push(music[0]);
//             setPrevious(newPrevious);

//             const newMusic = music.splice(1);
//             setPlaying(true);
//             setMusic(newMusic);
//         }
//     }

//     const last = () => {
//         const newMusic = music;
//         const lastSong = previous.pop();
//         // console.log(previous);
//         // console.log(newMusic);
//         // console.log(lastSong);

//         newMusic.unshift(lastSong);
//         // console.log(newMusic)
//         setMusic(newMusic);
//     }

//     const togglePlaying = () => {
//         const newPlaying = playing ? false : true;
//         setPlaying(newPlaying);
//     } 

//     const toggleQueue = () => {
//         const newQueueDisplay = queueDisplay ? false : true;
//         setQueueDisplay(newQueueDisplay);
//     } 

//     console.log(music);

//     return (
//         <div className="music-player-container">
//             {music &&
//                 <div className="music-player">
//                     <ReactPlayer 
//                         controls={true}
//                         width={'200px'}
//                         height={'200px'}
//                         onEnded={next}
//                         playing={playing}
//                         url={`https://www.youtube.com/watch?v=${music[0].resourceId.videoId}`} />
                
//                     <div className="music-player-controls">
//                         <button onClick={last}>Back</button>
//                         <button onClick={togglePlaying}>Play/Pause</button>
//                         <button onClick={next}>Next</button>
//                         <button onClick={toggleQueue}>Queue</button>
//                     </div>
//                 </div>
//             }

//             {music && queueDisplay &&
//                 <MusicPlayerQueue 
//                     music={music} 
//                     setMusic={setMusic}
//                 />
//             }

//         </div>
//     )

// }

export default MusicPlayer;