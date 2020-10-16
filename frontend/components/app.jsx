import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AdminRouter from './admin/admin_router';
import Artist from './admin/artists/artists';
import ArtistIndex from './artist_index/artist_index';
import ArtistShow from './artist_show/artist_show';
import NavBar from './navBar/NavBar';

const App = () => (
    <div>
        <NavBar />
        <Switch>
            <Route exact path="/artists" component={ArtistIndex} />
            <Route exact path="/artists/:id" component={ArtistShow} />

            <Route path="/admin" component={AdminRouter} />
        </Switch>
    </div>
);

export default App;