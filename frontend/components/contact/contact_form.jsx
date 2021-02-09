import React from 'react';

const ContactForm = () => {
    return (
        <form className="contact-form">
            <label>YOUR NAME:
                <input type="text"/>
            </label>
            <label>EMAIL:
                <input type="text"/>
            </label>
            <label>PHONE NUMBER:
                <input type="text"/>
            </label>
            <label>MESSAGE:
                <textarea />
            </label>
            <input id="contact-submit" type="submit" value="SEND" />
        </form>
    )
}

export default ContactForm;