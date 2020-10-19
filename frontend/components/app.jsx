import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AdminRouter from './admin/admin_router';
import ArtistIndex from './artist_index/artist_index';
import ArtistShow from './artist_show/artist_show';
import ItemIndex from './item_index/item_index'
import ItemShow from './item_show/item_show';
import NavBar from './navBar/NavBar';
import ReleaseIndex from './release_index/release_index';
import ReleaseShow from './release_show/release_show';
import Splash from './splash/splash';

const App = () => (
    <div>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Splash} />

            <Route exact path="/store" component={ItemIndex} />
            <Route exact path="/store/:id" component={ItemShow} />

            <Route exact path="/artists" component={ArtistIndex} />
            <Route exact path="/artists/:id" component={ArtistShow} />

            <Route exact path="/music" component={ReleaseIndex} />
            <Route exact path="/music/:id" component={ReleaseShow} />

            <Route path="/admin" component={AdminRouter} />
        </Switch>
    </div>
);

export default App;