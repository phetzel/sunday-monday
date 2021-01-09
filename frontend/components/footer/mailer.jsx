import React, { useState } from 'react';

import emailApi from '../../util/email_api_util';

const Mailer = (props) => {
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const update = () => {
        return e => {
            setEmail(e.currentTarget.value);
        }
    }

    const handleSubmit = () => {
        if (email.length < 1) {
            setMessage('Please Enter An Email Address');
        } else {
            let emailObj = {};
            emailObj['email'] = {};
            emailObj['email']['email'] = email;
            console.log(emailObj);
            emailApi.createEmail(emailObj)
                .then(res => console.log(res));
        }
    }

    return (
        <div className="mailer">
            <h1>MAILING LIST</h1>
            <h4>SIGN UP TO OUR MAILING LIST</h4>
            <div className="mailer-input">
                <input onChange={update()} placeholder="Your Email" />
                <button onClick={handleSubmit}>OK</button>
            </div>
            <h5>© 2020, SPACE MOTHER</h5>
        </div>
    );
}

export default Mailer;