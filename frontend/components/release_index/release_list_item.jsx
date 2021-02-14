import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

import MusicContext from '../../context/music_context';
import youtubeApi from '../../util/youtube_util';

const ReleaseListItem = ({release, history }) => {
    const { music, setMusic, setPlaying } = useContext(MusicContext);

    const handleClick = () => {
        history.push(`/music/${release.id}`);
    }

    const playRelease = () => {
        youtubeApi.fetchYoutubePlaylist(release.audio)
            .then(res => {
                const newMusic =  res.concat(music);
                setMusic(newMusic);
                setPlaying(true);
            });
    } 

    const queueRelease = () => {
        youtubeApi.fetchYoutubePlaylist(release.audio)
            .then(res => {
                const newMusic =  music.concat(res);
                setMusic(newMusic);
            });
    } 

    return (
        <div className="list-item">
            <img 
                alt={release.title}
                src={release.photoUrl} 
                title={release.title}/>
            <div className="list-item-bottom">
                <h4>{release.title}</h4>
                <a onClick={handleClick}>VIEW RELEASE</a>
                {/* <div className="artist-show-music-bottom-icon-container">
                    <FontAwesomeIcon 
                        className="artist-show-music-bottom-icon"
                        icon={faPlay} 
                        onClick={playRelease}/>
                    <FontAwesomeIcon 
                        className="artist-show-music-bottom-icon"
                        icon={faPlus}
                        onClick={queueRelease}/>
                </div> */}
            </div>
        </div>
    )
}

export default withRouter(ReleaseListItem);
