import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

import MusicContext from '../../context/music_context';
import resleaseApi from '../../util/release_api_util';
import ReleaseShowArtists from './release_show_artists';
import ReleaseShowDetails from './release_show_details';
import ReleaseShowList from './release_show_list';
import youtubeApi from '../../util/youtube_util';

const ReleaseShow = ({ match }) => {
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
        <div className="content-container">
            <div className="content">
                {release && 
                    <div>
                        <ReleaseShowDetails release={release} />
                        {songs && 
                            <ReleaseShowList songs={songs} /> 
                        }
                    </div>

                    /* <div>
                        {release.artists && release.artists.length > 0 &&
                            <ReleaseShowArtists artists={release.artists} />
                        }
                    </div> */
                }
            </div>
        </div>
    )
}

export default ReleaseShow;