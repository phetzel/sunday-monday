import React from 'react';

import Mailer from './mailer';
import Social from './social';
import Space from './space';

const Footer = () => {
    return (
        <div className="footer">
            <Mailer />
            <Social />
            <Space />
        </div>
    )
}

export default Footer;