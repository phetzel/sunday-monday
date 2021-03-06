import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';  

import About from './about/about';
import AdminRouter from './admin/admin_router';
import AlbumIndex from './release_index/album_index';
import ArtistShow from './artist_show/artist_show';
import ArtistVisualIndex from './artist_index/visual_index';
import AudioIndex from './artist_index/audio_index';
import Contact from './contact/contact';
import Footer from './footer/footer';
import EventIndex from './event_index/event_index';
import EventShow from './event_show/event_show';
import MusicContext from '../context/music_context';
import MusicPlayer from './music_player/music_player';
import Navbar from './navBar/NavBar';
import PlaylistIndex from './release_index/playlist_index';
import ReleaseShow from './release_show/release_show';
import ReleaseArtistIndex from './release_index/release_artist_index';
import Splash from './splash/splash';
import UserContext from '../context/user_context';
import AllVideosIndex from './video_index/all_videos_index';
import VideoArtistIndex from './video_index/video_artist_index';
import VideoShow from './video_show/video_show';
import VisualAllIndex from './visual_index/visual_all_index';
import VisualArtistIndex from './visual_index/visual_artist_index';

const App = () => {
    let currentUser;
    if (window.currentUser) {
        currentUser = window.currentUser;
    }

    const [user, setUser] = useState(currentUser);
    const [music, setMusic] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [musicVis, setMusicVis] = useState(false);
    const [queueDisplay, setQueueDisplay] = useState(false);

    const toggleMusicVis = () => {
        const newVis = musicVis ? false : true;
        setMusicVis(newVis);
        setQueueDisplay(newVis);
    }

    const plusMinus = musicVis ? faMinus : faPlus;

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <MusicContext.Provider 
                value={{ 
                    music, 
                    setMusic, 
                    playing, 
                    setPlaying,
                    musicVis,
                    setMusicVis,
                    queueDisplay,
                    setQueueDisplay }}>
                <div className="background">
                    <Navbar />

                    <div className="center-logo-container">
                        <img
                            className="center-logo"
                            src={window.logoSquare}
                        />
                    </div>

                    <Switch>
                        <Route exact path="/" component={Splash} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/artists/audio" component={AudioIndex} />
                        <Route exact path="/artists/visual" component={ArtistVisualIndex} />
                        <Route exact path="/artists/:id/videos" component={VideoArtistIndex} />
                        <Route exact path="/artists/:id/visuals" component={VisualArtistIndex} />
                        <Route exact path="/artists/:id" component={ArtistShow} />
                        <Route exact path="/artists/:id/music" component={ReleaseArtistIndex} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/music/releases" component={AlbumIndex} />
                        <Route exact path="/music/playlists" component={PlaylistIndex} />
                        <Route exact path="/music/:id" component={ReleaseShow} />
                        <Route exact path="/events" component={EventIndex} />
                        <Route exact path="/events/:id" component={EventShow} />
                        <Route exact path="/videos" component={AllVideosIndex} />
                        <Route exact path="/videos/:id" component={VideoShow} />
                        <Route exact path="/visuals" component={VisualAllIndex} />

                        <Route path="/admin" render={() => (
                            user ? (
                                <AdminRouter />
                            ) : (
                                <Redirect to="/" />
                            )
                        )} />
                    </Switch>


                    <MusicPlayer 
                        visible={musicVis}/>          
                    
                    <div className="music-toggle">
                        <FontAwesomeIcon icon={plusMinus}  onClick={toggleMusicVis} />
                    </div>

                </div>
                <Footer />
            </MusicContext.Provider>
        </UserContext.Provider>
    )
};


export default App;