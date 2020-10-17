import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AdminNav from './admin_nav';
import Artists from './artists/artists';
import Items from './items/items';
import Releases from './releases/releases';

const AdminRouter = () => (
    <div>
        <AdminNav />
        <Switch>
            <Route exact path="/admin/artists" component={Artists} />
            <Route exact path="/admin/items" component={Items} />
            <Route exact path="/admin/music" component={Releases} />
        </Switch>
    </div>
);

export default AdminRouter;