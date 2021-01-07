import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebook, 
    faInstagram, 
    faSpotify,
    faTwitter,
    faSoundcloud,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Social = (props) => {
    return (
        <div className="social">
            <h1>SOCIAL</h1>
            <ul>
                <FontAwesomeIcon 
                    className="social-icon"
                    icon={faFacebook} 
                    onClick={() => console.log('hit')}/>
                <FontAwesomeIcon 
                    className="social-icon"
                    icon={faInstagram} 
                    onClick={() => console.log('hit')}/>
                <FontAwesomeIcon 
                    className="social-icon"
                    icon={faSpotify} 
                    onClick={() => console.log('hit')}/>
                <FontAwesomeIcon 
                    className="social-icon"
                    icon={faTwitter} 
                    onClick={() => console.log('hit')}/>
                <FontAwesomeIcon 
                    className="social-icon"
                    icon={faSoundcloud} 
                    onClick={() => console.log('hit')}/>
                <FontAwesomeIcon 
                    className="social-icon"
                    icon={faYoutube} 
                    onClick={() => console.log('hit')}/>

            </ul>
        </div>
    );
}

export default Social;