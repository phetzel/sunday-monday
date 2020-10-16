import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './navBar/NavBar';

const App = () => (
    <div>
        <NavBar />
        <h1>React working</h1>
        {/* <Switch></Switch> */}
    </div>
);

export default App;