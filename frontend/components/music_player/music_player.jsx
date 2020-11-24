import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faList, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';     

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

        const playPause = playing ? faPause : faPlay;
        console.log(music);

        return (
            <div className="music-player-container">
                {music && music.length > 0 &&
                    <div className="music-player">
                        <div style={{
                            backgroundImage: `url(${music[0].thumbnails.high.url})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            height: '200px',
                            width: '200px'
                        }}/>


                        <marquee scrollamount="2"><h1>{music[0].title}</h1></marquee>
                        

                        <ReactPlayer 
                            controls={false}
                            height={'0px'}
                            width={'200px'}
                            onEnded={this.next}
                            playing={playing}
                            url={`https://www.youtube.com/watch?v=${music[0].resourceId.videoId}`} />
                    
                        <div className="music-player-controls">
                            <button onClick={this.last}>
                                <FontAwesomeIcon icon={faBackward} />
                            </button>
                            <button onClick={this.togglePlaying}>
                                <FontAwesomeIcon icon={playPause} />
                            </button>
                            <button onClick={this.next}>
                                <FontAwesomeIcon icon={faForward} />
                            </button>
                            <button onClick={this.toggleQueue}>
                                <FontAwesomeIcon icon={faList} />
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

        </div>
        )
    }
}

export default MusicPlayer;