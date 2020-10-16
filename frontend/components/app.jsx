import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AdminRouter from './admin/admin_router';
import ArtistIndex from './artist_index/artist_index';
import ArtistShow from './artist_show/artist_show';
import ItemIndex from './item_index/item_index'
import NavBar from './navBar/NavBar';

const App = () => (
    <div>
        <NavBar />
        <Switch>
            <Route exact path="/artists" component={ArtistIndex} />
            <Route exact path="/artists/:id" component={ArtistShow} />

            <Route exact path="/store" component={ItemIndex} />

            <Route path="/admin" component={AdminRouter} />
        </Switch>
    </div>
);

export default App;