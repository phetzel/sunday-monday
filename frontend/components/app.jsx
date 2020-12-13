import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';  

import AdminRouter from './admin/admin_router';
import AlbumIndex from './release_index/album_index';
import ArtistShow from './artist_show/artist_show';
import AudioIndex from './artist_index/audio_index';
import EventIndex from './event_index/event_index';
import EventShow from './event_show/event_show';
import MusicPlayer from './music_player/music_player';
import Navbar from './navbar/navbar';
import PlaylistIndex from './release_index/playlist_index';
import ReleaseShow from './release_show/release_show';
import ReleaseArtistIndex from './release_index/release_artist_index';
import Splash from './splash/splash';
import UserContext from '../context/user_context';
import AllVideosIndex from './video_index/all_videos_index';
import VideoArtistIndex from './video_index/video_artist_index';
import VideoShow from './video_show/video_show';
import VisualArtistIndex from './artist_index/visual_index';
import VisualIndex from './visual_index/visual_index';
import VisualShow from './visual_show/visual_show';

const App = () => {
    let currentUser;
    if (window.currentUser) {
        currentUser = window.currentUser;
    }

    const [user, setUser] = useState(currentUser);
    const [music, setMusic] = useState();
    const [playing, setPlaying] = useState(false);
    const [musicVis, setMusicVis] = useState(false);

    const toggleMusicVis = () => {
        const newVis = musicVis ? false : true;
        setMusicVis(newVis);
    }

    const plusMinus = musicVis ? faMinus : faPlus;

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <div className="content">
                <Navbar />
                {/* <img 
                    className="center-logo" 
                    src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fc9bb491f8a87f7078fe376/img/image-10@2x.svg"
                    alt="Logo" /> */}

                <Switch>
                    <Route exact path="/" component={Splash} />

                    <Route exact path="/artists/audio" component={AudioIndex} />
                    <Route exact path="/artists/visual" component={VisualArtistIndex} />
                    <Route exact path="/artists/:id" component={ArtistShow} />
                    <Route exact path="/artists/:id/music" component={ReleaseArtistIndex} />
                    <Route exact path="/artists/:id/videos" component={VideoArtistIndex} />

                    <Route exact path="/music/releases" component={AlbumIndex} />
                    <Route exact path="/music/playlists" component={PlaylistIndex} />
                    {/* <Route exact path="/music/:id"  render={(props) => (
                        <ReleaseShow 
                            music={music} 
                            setMusic={setMusic}
                            setPlaying={setPlaying}
                            {...props} />
                    )} />                     */}

                    {/* <Route exact path="/events" component={EventIndex} /> */}
                    {/* <Route exact path="/events/:id" component={EventShow} /> */}

                    <Route exact path="/videos" component={AllVideosIndex} />
                    <Route exact path="/videos/:id" component={VideoShow} />

                    <Route exact path="/visuals" component={VisualIndex} />
                    {/* <Route exact path="/visuals/:id" component={VisualShow} /> */}

                    <Route path="/admin" render={() => (
                        user ? (
                            <AdminRouter />
                        ) : (
                            <Redirect to="/" />
                        )
                    )} />
                </Switch>

                {/* <div className="bottom-rect">
                    <MusicPlayer 
                        music={music} 
                        setMusic={setMusic} 
                        playing={playing}
                        setPlaying={setPlaying}
                        visible={musicVis}/>          
                </div> */}
                {/* <div className="music-toggle">
                    <FontAwesomeIcon icon={plusMinus}  onClick={toggleMusicVis} />
                </div> */}
                
            </div>
        </ UserContext.Provider>
    )
};


export default App;