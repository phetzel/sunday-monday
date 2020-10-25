import React from 'react';

import BottomNav from '../navBar/bottom_nav';

const Contact = () => (
    <div>
        <BottomNav />
        <div className="contact">
            <img src={colorLogo} alt="Color Logo"/>
            <h6 className="p-color">Email</h6>
            <p>ridl@studymusicgroup.com</p>
        </div>
    </div>
)

export default Contact;