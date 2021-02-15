import React from 'react';

import ContactForm from './contact_form';

const Contact = () => {
    return (
        <div className="content-container">
            <div className="content">
                <div className="header-container">
                    <div className="header">
                        <h1><span>CONTACT US</span></h1>
                    </div>
                </div>

                <div className="header-rect" />

                <div className="contact">
                    <ul className="contact-left">
                        <li>CONTACT:</li>
                        <li>Space Mother</li>
                        <li>spacemother.recs@gmail.com</li>
                    </ul>

                    <ContactForm />
                </div>

            </div>
        </div>
    )
}

export default Contact;