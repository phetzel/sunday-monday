import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlay } from '@fortawesome/free-solid-svg-icons';        

const MusicPlayerQueue = ({ music, setMusic }) => {
    const queue = music.slice(1);
    console.log(music);

    const remove = song => {
        const newMusic = music.filter(m => m.resourceId.videoId != song.resourceId.videoId)
        setMusic(newMusic);
    }

    return (
        <ul className="music-player-queue">
            {queue.map((song, idx) => (
                <li key={idx}>
                    <img src={song.thumbnails.default.url} alt=""/>
                    <h6>{song.title}</h6>
                    <button><FontAwesomeIcon icon={faPlay} /></button>
                    <button onClick={() => remove(song)}><FontAwesomeIcon icon={faMinusCircle} /></button>
                </li>
            ))}
        </ul>
    )
}

export default MusicPlayerQueue;