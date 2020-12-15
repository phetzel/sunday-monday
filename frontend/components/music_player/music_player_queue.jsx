import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlay } from '@fortawesome/free-solid-svg-icons';        

// const MusicPlayerQueue = ({ music, setMusic, setPlaying }) => {
//     const queue = music.slice(1);

//     const play = song => {
//         const newMusic = music.filter(m => m.resourceId.videoId != song.resourceId.videoId);
//         newMusic.unshift(song);
//         setMusic(newMusic);
//         setPlaying(true);
//     }

//     const remove = song => {
//         const newMusic = music.filter(m => m.resourceId.videoId != song.resourceId.videoId);
//         setMusic(newMusic);
//     }

//     return (
//         <ul className="music-player-queue">
//             <h3>Queue</h3>
//             {queue.map((song, idx) => (
//                 <li key={idx}>
//                     <img src={song.thumbnails.default.url} alt=""/>
//                     <h6>{song.title}</h6>
//                     <button onClick={() => play(song)}><FontAwesomeIcon icon={faPlay} /></button>
//                     <button onClick={() => remove(song)}><FontAwesomeIcon icon={faMinusCircle} /></button>
//                 </li>
//             ))}
//         </ul>
//     )
// }

class MusicPlayerQueue extends React.Component {
    constructor(props) {
        super(props);

        this.play = this.play.bind(this);
        this.remove = this.remove.bind(this);
    }

    play(song) {
        const { music, setMusic, setPlaying } = this.props;
        const newMusic = music.filter(m => m.resourceId.videoId != song.resourceId.videoId);
        newMusic.unshift(song);
        setMusic(newMusic);
        setPlaying(true);
    }

    remove(song) {
        const { music, setMusic } = this.props;
        const newMusic = music.filter(m => m.resourceId.videoId != song.resourceId.videoId);
        setMusic(newMusic);
    }

    render() {
        const { music } = this.props;
        const queue = music.slice(1);

        return (
            <ul className="music-player-queue">
                <h3>Queue</h3>
                {queue.map((song, idx) => (
                    <li key={idx}>
                        <img src={song.thumbnails.default.url} alt=""/>
                        <h6>{song.title}</h6>
                        <div>
                            <button onClick={() => this.play(song)}><FontAwesomeIcon icon={faPlay} /></button>
                            <button onClick={() => this.remove(song)}><FontAwesomeIcon icon={faMinusCircle} /></button>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

export default MusicPlayerQueue;