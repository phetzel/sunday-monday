import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlay } from '@fortawesome/free-solid-svg-icons';        

const MusicPlayerQueue = ({ music, setMusic, setPlaying }) => {
    const queue = music.slice(1);

    const play = idx => {
        let newMusic = [...music];
        const newSong = newMusic[idx + 1];

        newMusic = newMusic.filter((ele, i) => i != idx + 1);
        newMusic.unshift(newSong);

        setMusic(newMusic);
        setPlaying(true);
    }

    const remove = idx => {
        const newMusic = music.filter((m, i) => idx != (i - 1));
        setMusic(newMusic);
    }

    return (
        <ul className="music-player-queue">
            <h3>Queue</h3>
            {queue.map((song, idx) => (
                <li key={idx}>
                    <img src={song.thumbnails.default.url} alt=""/>
                    <h6>{song.title}</h6>
                    <button onClick={() => play(idx)}><FontAwesomeIcon icon={faPlay} /></button>
                    <button onClick={() => remove(idx)}><FontAwesomeIcon icon={faMinusCircle} /></button>
                </li>
            ))}
        </ul>
    )
}


export default MusicPlayerQueue;