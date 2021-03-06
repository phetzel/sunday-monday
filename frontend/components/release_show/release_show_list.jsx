import React, { useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';      

import MusicContext from '../../context/music_context';
 
const RelseaseShowList = ({ songs }) => {
  const { music, setMusic, setPlaying, setMusicVis } = useContext(MusicContext);

  const handlePlay = song => {
    const newMusic = [...music];
    newMusic.unshift(song);
    setMusic(newMusic);
    setPlaying(true);
    setMusicVis(true);
  }

  const handleAdd = song => {
    const newMusic = [...music];
    newMusic.push(song);
    setMusic(newMusic);
  }

  return (
    <ul className="release-show-list">
      { songs && songs.length > 0 &&
        songs.map((song, idx) => (
          <li className="release-song" key={idx}>
              
            <img className="release-song-image" src={song.thumbnails.default.url} />

            <div className="release-song-details">
              <h6>{song.title}</h6>

              <div className="release-song-details-bottom">
                <FontAwesomeIcon 
                  className="release-song-icon"
                  onClick={() => handlePlay(song)} 
                  icon={faPlay} />
                <FontAwesomeIcon 
                  className="release-song-icon"
                  onClick={() => handleAdd(song)} 
                  icon={faPlus} />
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default RelseaseShowList;