import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCheckCircle,
    faTimesCircle
} from '@fortawesome/free-solid-svg-icons';


import emailApi from '../../util/email_api_util';

const Mailer = (props) => {
    const [email, setEmail] = useState("");
    const [className, setClassName] = useState("");
    const [placeholder, setPlaceholder] = useState("Your Email");

    const update = () => {
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
                setPlaceholder("Success");
                setClassName("mailer-success");
                setEmail("");
                // setTimeout(resetPLaceholder(), 50000);
            }, err => {
                setPlaceholder(err.responseJSON[0]);
                setClassName("mailer-fail");
                setEmail("");
                // setTimeout(resetPLaceholder(), 50000);
            });
    }

    const resetClass = () => {
        setEmail('');
        setPlaceholder('Your Email');
        setClassName('');
    }

    let mailerIcon = null;
    if (className === "mailer-success") {
        mailerIcon = (
            <FontAwesomeIcon 
                className="mailer-success-icon"
                icon={faCheckCircle} />
        ); 
    } else if (className === "mailer-fail") {
        mailerIcon = (
            <FontAwesomeIcon 
                className="mailer-fail-icon"
                icon={faTimesCircle} />
        ); 
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

                {mailerIcon}

                <button onClick={handleSubmit}>OK</button>
            </div>
            <h5>© 2020, SPACE MOTHER</h5>
        </div>
    );
}

export default Mailer;