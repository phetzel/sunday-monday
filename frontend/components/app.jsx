import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ArtistIndex from './artist_index/artist_index';
import ArtistShow from './artist_show/artist_show';
import NavBar from './navBar/NavBar';

const App = () => (
    <div>
        <NavBar />
        <Switch>
            <Route exact path="/artists" component={ArtistIndex} />
            <Route exact path="/artists/:id" component={ArtistShow} />
        </Switch>
    </div>
);

export default App;