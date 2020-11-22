import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';        
 
const RelseaseShowList = ({ songs }) => {
  const { items } = songs;
  console.log(items);
  return (
    <ul className="release-song-list">

      {
        items.map((song, idx) => (
          <li className="release-song" key={idx}>

            <img className="release-song-image" src={song.snippet.thumbnails.default.url} />

            <div className="release-song-details">
              <h6>{song.snippet.title}</h6>

              <div>
                <button><FontAwesomeIcon icon={faPlay} /></button>
                <button><FontAwesomeIcon icon={faPlus} /></button>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default RelseaseShowList;