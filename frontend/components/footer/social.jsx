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
    const handleSocial = site => {
        window.open(site, '_blank'); 
    }

    return (
        <div className="social">
            <h1>SOCIAL</h1>
            <ul>
                {/* <FontAwesomeIcon 
                    className="social-icon"
                    icon={faFacebook} 
                    onClick={() => console.log('hit')}/> */}
                <FontAwesomeIcon 
                    className="social-icon"
                    icon={faInstagram} 
                    onClick={() => handleSocial('https://www.instagram.com/_spacemother_/')}/>
                {/* <FontAwesomeIcon 
                    className="social-icon"
                    icon={faSpotify} 
                    onClick={() => console.log('hit')}/> */}
                <FontAwesomeIcon 
                    className="social-icon"
                    icon={faTwitter} 
                    onClick={() => handleSocial('https://twitter.com/SPACEMOTHER1')}/>
                <FontAwesomeIcon 
                    className="social-icon"
                    icon={faSoundcloud} 
                    onClick={() => handleSocial('https://soundcloud.com/space-mother')}/>
                <FontAwesomeIcon 
                    className="social-icon"
                    icon={faYoutube} 
                    onClick={() => handleSocial('https://www.youtube.com/channel/UCsq4-NfMXyDhdHP07-QfUTw')}/>

            </ul>
        </div>
    );
}

export default Social;