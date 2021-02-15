import React, { useState } from 'react';

import contactApi from '../../util/contact_api_util';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const update = (func) => {
        return e => {
            func(e.currentTarget.value)
        }
    }

    const handleSubmit = () => {
        let contactObj = {};
        contactObj['contact'] = {};
        contactObj['contact']['name'] = name;
        contactObj['contact']['email'] = email;
        contactObj['contact']['number'] = number;
        contactObj['contact']['message'] = message;

        contactApi.createContact(contactObj);
    }

    return (
        <form className="contact-form">
            <label>YOUR NAME:
                <input 
                    onChange={update(setName)} 
                    value={name}
                    type="text"/>
            </label>

            <label>EMAIL:
                <input 
                    onChange={update(setEmail)} 
                    value={email}
                    type="text"/>
            </label>

            <label>PHONE NUMBER:
                <input 
                    onChange={update(setNumber)} 
                    value={number}
                    type="text"/>
            </label>

            <label>MESSAGE:
                <textarea 
                    onChange={update(setMessage)} 
                    value={message} />
            </label>

            <div className="contact-submit" onClick={handleSubmit}>
                <h6>SEND</h6>
            </div>
        </form>
    )
}

export default ContactForm;