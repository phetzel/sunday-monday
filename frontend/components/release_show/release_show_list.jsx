import React, { useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';      

import MusicContext from '../../context/music_context';
 
const RelseaseShowList = ({ songs }) => {
  const { music, setMusic, setPlaying } = useContext(MusicContext);

  const handlePlay = song => {
    const newMusic = [...music];
    newMusic.unshift(song);
    setMusic(newMusic);
    setPlaying(true);
  }

  const handleAdd = song => {
    const newMusic = [...music];
    newMusic.push(song);
    setMusic(newMusic);
  }


  return (
    <div className="release-song-list-container">
      <h1>Tracks</h1>
      <ul className="release-song-list">
        { songs && songs.length > 0 &&
          songs.map((song, idx) => (
            <li className="release-song" key={idx}>

              <img className="release-song-image" src={song.thumbnails.default.url} />

              <div className="release-song-details">
                <h6>{song.title}</h6>
                
                <FontAwesomeIcon 
                  className="release-song-icon"
                  onClick={() => handlePlay(song)} 
                  icon={faPlay} />
                <FontAwesomeIcon 
                  className="release-song-icon"
                  onClick={() => handleAdd(song)} 
                  icon={faPlus} />

              </div>
            </li>
          ))
        }
      </ul>
    </div>

  )
}

export default RelseaseShowList;