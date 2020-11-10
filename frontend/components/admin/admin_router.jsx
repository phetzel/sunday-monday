import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AdminNav from './admin_nav';
import Artists from './artists/artists';
import Events from './events/events';
import Items from './items/items';
import Releases from './releases/releases';
import Videos from './videos/videos';
import Visuals from './visuals/visuals';


const AdminRouter = () => (
    <div>
        <AdminNav />
        <Switch>
            <Route exact path="/admin/artists" component={Artists} />
            <Route exact path="/admin/items" component={Items} />
            <Route exact path="/admin/music" component={Releases} />
            <Route exact path="/admin/events" component={Events} />
            <Route exact path="/admin/videos" component={Videos} />
            <Route exact path="/admin/visuals" component={Visuals} />
        </Switch>
    </div>
);

export default AdminRouter;