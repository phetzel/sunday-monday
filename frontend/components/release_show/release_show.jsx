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
                
                <div className="release-shadow-container">
                    <div className="release-shadow-line" />
                    <div className="release-shadow-line" />
                </div>

                { release && 
                    <div className="release-show">
                        <div className="release-show-main-img">
                            <img src={release.photoUrl} alt=""/>
                        </div>

                        { songs && 
                            <ReleaseShowList songs={songs}/>
                        }
                    </div>
                }

                { songs && songs.length > 4 && 
                    <div className="release-shadow-container">
                        <div className="release-shadow-line" />
                        <div className="release-shadow-line" />
                    </div>
                }

            </div>
        </div>
    )
}

export default ReleaseShow;