import React, { useContext, useEffect, useState } from 'react';

import resleaseApi from '../../util/release_api_util';
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


    return(
        <div className="content-container">
            <div className="content">

                <div className="header-container">
                    <div className="header">
                        { release && 
                            <h1><span>{release.title}</span></h1>
                        }
                    </div>
                </div>

                <div className="header-rect" />

                { release && 
                    <div className="release-show">
                        
                        <div className="release-show-shadow">
                            <img src={release.photoUrl} alt=""/>
                        </div>

                        { songs && 
                            <ReleaseShowList songs={songs}/>
                        }
                    </div>
                }
                
            </div>
        </div>
    )
}

export default ReleaseShow;