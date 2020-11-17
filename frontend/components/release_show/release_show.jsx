import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

import BottomNav from '../navBar/bottom_nav';
import MusicContext from '../../context/music_context';
import resleaseApi from '../../util/release_api_util';
import ReleaseShowArtists from './release_show_artists';

const ReleaseShow = ({ match}) => {
    const { music, setMusic } = useContext(MusicContext);
    const [release, setRelease] = useState();

    const fetchRelease = () => {
        const id = match.params.id;
        resleaseApi.fetchRelease(id).then(release => {
            setRelease(release);
        })
    }

    useEffect(() => {
        fetchRelease();
    }, []);
    
    const handlePlay = () => {
        const newMusic = music;
        newMusic.unshift(release);
        setMusic(newMusic);
    }
    
    const handleAdd = () => {
        const newMusic = music;
        newMusic.push(release);
        setMusic(newMusic);
    }

    return(
        <div>
            <BottomNav />
            <div className="release-show content">
                {release && 
                    <div className="release-show-details">
                        <img src={release.photoUrl} alt="dj pic"/>
                        <div className="release-show-details-text">
                            <div>
                                <h4 className="p-color">{release.title}</h4>
                                <div></div>
                                <button onClick={handlePlay}><FontAwesomeIcon icon={faPlay} /></button>
                                <button onClick={handleAdd}><FontAwesomeIcon icon={faPlus} /></button>
                                <p>{release.description}</p>
                            </div>
                            {release.artists && release.artists.length > 0 &&
                                <ReleaseShowArtists artists={release.artists} />
                            }
                        </div> 
                    </div>
                }
            </div>
        </div>
    )
}

export default ReleaseShow;