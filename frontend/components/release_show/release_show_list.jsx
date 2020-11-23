import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';        
import { ShoppingCartOutlined } from '@material-ui/icons';
 
const RelseaseShowList = ({ songs, music, setMusic, setPlaying }) => {
  const handlePlay = song => {
    const newMusic = music;
    newMusic.unshift(song);
    setMusic(newMusic);
    setPlaying(true);
  }

  const handleAdd = song => {
    const newMusic = music;
    newMusic.push(song);
    setMusic(newMusic);
  }

  return (
    <ul className="release-song-list">

      {
        songs.map((song, idx) => (
          <li className="release-song" key={idx}>

            <img className="release-song-image" src={song.thumbnails.default.url} />

            <div className="release-song-details">
              <h6>{song.title}</h6>

              <div>
                <button onClick={() => handlePlay(song)}><FontAwesomeIcon icon={faPlay} /></button>
                <button onClick={() => handleAdd(song)}><FontAwesomeIcon icon={faPlus} /></button>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default RelseaseShowList;