import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

import MusicContext from '../../context/music_context';
import youtubeApi from '../../util/youtube_util';
import ReleaseListItemArtists from './release_list_item_artists';

const ReleaseListItem = ({release, history }) => {
    const { music, setMusic, setPlaying, setMusicVis } = useContext(MusicContext);

    const handleClick = () => {
        history.push(`/music/${release.id}`);
    }

    const playRelease = () => {
        youtubeApi.fetchYoutubePlaylist(release.audio)
            .then(res => {
                const newMusic =  res.concat(music);
                setMusic(newMusic);
                setPlaying(true);
                setMusicVis(true);
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
                <div>
                    <div className="release-item-header">
                        <h4>{release.title}</h4>
                        <div className="release-item-icons">
                            <FontAwesomeIcon 
                                className="release-item-icon"
                                icon={faPlay} 
                                onClick={playRelease}/>
                            <FontAwesomeIcon 
                                className="release-item-icon"
                                icon={faPlus}
                                onClick={queueRelease}/>
                        </div>
                    </div>
                    <ReleaseListItemArtists artists={release.artists} />
                </div>
                
                <a onClick={handleClick}>VIEW RELEASE</a>
            </div>
        </div>
    )
}

export default withRouter(ReleaseListItem);
