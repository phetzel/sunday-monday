import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AdminNav from './admin_nav';
import Artists from './artists/artists';

const AdminRouter = () => (
    <div>
        <AdminNav />
        <Switch>
            <Route exact path="/admin/artists" component={Artists} />
        </Switch>
    </div>
);

export default AdminRouter;