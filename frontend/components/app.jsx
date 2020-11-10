import React, { useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import AdminRouter from './admin/admin_router';
import AlbumIndex from './release_index/album_index';
import ArtistShow from './artist_show/artist_show';
import AudioIndex from './artist_index/audio_index';
import EventIndex from './event_index/event_index';
import EventShow from './event_show/event_show';
import ItemIndex from './item_index/item_index'
import ItemShow from './item_show/item_show';
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

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Splash} />

                <Route exact path="/store" component={ItemIndex} />
                <Route exact path="/store/:id" component={ItemShow} />

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
        </ UserContext.Provider>
    )
};

export default App;