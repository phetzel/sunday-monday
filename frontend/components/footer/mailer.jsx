import React, { useState } from 'react';

import emailApi from '../../util/email_api_util';

const Mailer = (props) => {
    const [email, setEmail] = useState();
    const [className, setClassName] = useState("");
    const [placeholder, setPlaceholder] = useState("Your Email");

    const update = () => {
        // setClassName("");
        return e => {
            setEmail(e.currentTarget.value);
        }
    }

    const handleSubmit = () => {
        let emailObj = {};
        emailObj['email'] = {};
        emailObj['email']['email'] = email;

        emailApi.createEmail(emailObj)
            .then(res =>  {
                // setEmail("Success");
                // setPlaceholder("Success");
                setClassName("mailer-success");
            }, err => {
                // setEmail();
                setClassName("mailer-fail");
            });
    }


    return (
        <div className="mailer">
            <h1>MAILING LIST</h1>
            <h4>SIGN UP TO OUR MAILING LIST</h4>
            <div className="mailer-input">

                <input 
                    className={`mailer-input-input ${className}`}
                    onChange={update()} 
                    placeholder={placeholder} 
                    value={email} />

                <button onClick={handleSubmit}>OK</button>
            </div>
            <h5>© 2020, SPACE MOTHER</h5>
        </div>
    );
}

export default Mailer;