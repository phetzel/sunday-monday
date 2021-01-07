import React, { useState } from 'react';

import { createEmail } from '../../util/email_api_util';

const Mailer = (props) => {
    const [email, setEmail] = useState();

    const update = () => {
        return e => {
            // console.log(e.currentTarget.value);
            setEmail(e.currentTarget.value);
        }
    }

    const handleSubmit = () => {
        let emailObj = {};
        emailObj['email'] = {};
        emailObj['email']['email'] = email;
        createEmail(emailObj).then(alert('sucsess'));
    }


    return (
        <div className="mailer">
            <h1>MAILING LIST</h1>
            <h4>SIGN UP TO OUR MAILING LIST</h4>
            <div className="mailer-input">
                <input onChange={e => update()} placeholder="Your Email" />
                <button onClick={handleSubmit}>OK</button>
            </div>
            <h5>© 2020, SPACE MOTHER</h5>
        </div>
    );
}

export default Mailer;