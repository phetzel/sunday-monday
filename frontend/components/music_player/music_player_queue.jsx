import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlay } from '@fortawesome/free-solid-svg-icons';        

const MusicPlayerQueue = ({ music, setMusic, setPlaying }) => {
    const queue = music.slice(1);

    const play = song => {
        const newMusic = music.filter(m => m.resourceId.videoId != song.resourceId.videoId);
        newMusic.unshift(song);
        setMusic(newMusic);
        setPlaying(true);
    }

    const remove = song => {
        const newMusic = music.filter(m => m.resourceId.videoId != song.resourceId.videoId);
        setMusic(newMusic);
    }

    return (
        <ul className="music-player-queue">
            <h3>Queue</h3>
            {queue.map((song, idx) => (
                <li key={idx}>
                    <img src={song.thumbnails.default.url} alt=""/>
                    <h6>{song.title}</h6>
                    <button onClick={() => play(song)}><FontAwesomeIcon icon={faPlay} /></button>
                    <button onClick={() => remove(song)}><FontAwesomeIcon icon={faMinusCircle} /></button>
                </li>
            ))}
        </ul>
    )
}

export default MusicPlayerQueue;