import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

import BottomNav from '../navBar/bottom_nav';
import MusicContext from '../../context/music_context';
import resleaseApi from '../../util/release_api_util';
import ReleaseShowArtists from './release_show_artists';
import ReleaseShowList from './release_show_list';
import youtubeApi from '../../util/youtube_util';

const ReleaseShow = ({ match, music, setMusic, setPlaying }) => {
    const [release, setRelease] = useState();
    const [songs, setSongs] = useState();

    const fetchRelease = () => {
        const id = match.params.id;

        resleaseApi.fetchRelease(id).then(release => {
            setRelease(release);
            youtubeApi.fetchPlaylistFromYoutube(release.audio, setSongs);
        })
    }

    useEffect(() => {
        fetchRelease();
    }, []);

    const handlePlay = () => {
        const newMusic = songs.concat(music);
        setMusic(newMusic);
        setPlaying(true);
    }
    
    const handleAdd = () => {
        const newMusic = music;

        songs.forEach(song => {
            newMusic.push(song);
        })
        setMusic(newMusic);
    }

    
    return(
        <div>
            <BottomNav />
            <div className="release-show content">
                {release && 
                    <div className="release-show-details">
                        <div>
                            <img src={release.photoUrl} alt="dj pic"/>
                            <p>{release.description}</p>
                        </div>
                        
                        <div className="release-show-songs">
                            <div className="release-show-song-top">
                                <h4 className="p-color">{release.title}</h4>
                                
                                <button 
                                    className="release-show-item"
                                    onClick={handlePlay}>
                                    <FontAwesomeIcon icon={faPlay} />
                                </button>
                                <button 
                                    className="release-show-item"
                                    onClick={handleAdd}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>

                            {songs && 
                                <ReleaseShowList 
                                    songs={songs}
                                    music={music}
                                    setMusic={setMusic}
                                    setPlaying={setPlaying}/> 
                            }
                        </div>


                        <div>
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