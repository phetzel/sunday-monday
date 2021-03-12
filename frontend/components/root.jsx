import React from 'react';
import { HashRouter } from 'react-router-dom';

import App from './app';
import ScrollToTop from './ScrollToTop';

const Root = () => (
    <HashRouter>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </HashRouter>
);

export default Root;