import React, { useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import AdminRouter from './admin/admin_router';
import AlbumIndex from './release_index/album_index';
import ArtistIndex from './artist_index/artist_index';
import ArtistShow from './artist_show/artist_show';
import EventIndex from './event_index/event_index';
import EventShow from './event_show/event_show';
import ItemIndex from './item_index/item_index'
import ItemShow from './item_show/item_show';
import NavBar from './navBar/NavBar';
import PlaylistIndex from './release_index/playlist_index';
import ReleaseShow from './release_show/release_show';
import Splash from './splash/splash';
import UserContext from '../context/user_context';

const App = () => {
    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Splash} />

                <Route exact path="/store" component={ItemIndex} />
                <Route exact path="/store/:id" component={ItemShow} />

                <Route exact path="/artists" component={ArtistIndex} />
                <Route exact path="/artists/:id" component={ArtistShow} />

                <Route exact path="/music/releases" component={AlbumIndex} />
                <Route exact path="/music/playlists" component={PlaylistIndex} />
                <Route exact path="/music/:id" component={ReleaseShow} />

                <Route exact path="/events" component={EventIndex} />
                <Route exact path="/events/:id" component={EventShow} />

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