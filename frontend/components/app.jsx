import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import AdminRouter from './admin/admin_router';
import AlbumIndex from './release_index/album_index';
import ArtistShow from './artist_show/artist_show';
import AudioIndex from './artist_index/audio_index';
import Background from './background/background';
import EventIndex from './event_index/event_index';
import EventShow from './event_show/event_show';
import MusicContext from '../context/music_context';
import MusicPlayer from './music_player/music_player';
import NavBar from './navBar/NavBar';
import PlaylistIndex from './release_index/playlist_index';
import ReleaseShow from './release_show/release_show';
import Splash from './splash/splash';
import UserContext from '../context/user_context';
import VideoIndex from './video_index/video_index';
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
    const [music, setMusic] = useState([]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <MusicContext.Provider value={{ music, setMusic }}>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Background} />

                    <Route exact path="/artists/audio" component={AudioIndex} />
                    <Route exact path="/artists/visual" component={VisualArtistIndex} />
                    <Route exact path="/artists/:id" component={ArtistShow} />

                    <Route exact path="/music/releases" component={AlbumIndex} />
                    <Route exact path="/music/playlists" component={PlaylistIndex} />
                    <Route exact path="/music/:id" component={ReleaseShow} />

                    <Route exact path="/events" component={EventIndex} />
                    <Route exact path="/events/:id" component={EventShow} />

                    <Route exact path="/videos" component={VideoIndex} />
                    <Route exact path="/videos/:id" component={VideoShow} />

                    <Route exact path="/visuals" component={VisualIndex} />
                    <Route exact path="/visuals/:id" component={VisualShow} />

                    <Route path="/admin" render={() => (
                        user ? (
                            <AdminRouter />
                        ) : (
                            <Redirect to="/" />
                        )
                    )} />
                </Switch>
                {/* <MusicPlayer /> */}
            </ MusicContext.Provider>
        </ UserContext.Provider>
    )
};

// const App = () => {
//     const [results, useResults] = useState();

//     const key = 'AIzaSyDxlLeVp2UcirRls5A-Xp_7MS68J35nrNo';
//     const channelID = 'UCoIyS9hbe-yyxoDNwT4nvfw';
//     const finalURL = `https://www.googleapis.com/youtube/v3/search?`
//         + `key=${key}`
//         + `&part=snippet`
//         + `&type=video`
//         + `&relatedToVideoId=975NMwYer_A`;
        
//     useEffect(() => {
//         fetch(finalURL)
//             .then(res => res.json())
//             .then(res => console.log(res))
//     })

//     return (
//         <div>
//             <h1>Youtube</h1>
//             <iframe 
//                 width="560" 
//                 height="315" 
//                 src="https://www.youtube.com/embed/975NMwYer_A" 
//                 frameBorder="0" 
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//                 allowFullScreen />
//         </div>
//     )
// }

export default App;