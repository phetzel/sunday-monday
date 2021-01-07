import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const VisualListItem = ({visual, onClick}) => {

    return (
        <div className="visual-list-item" onClick={onClick}>
            <img alt={visual.title} src={visual.photoUrl} title={visual.title}/>
            {/* <div className="visual-list-item-bottom">
                <h6>{visual.title}</h6>
                <FontAwesomeIcon 
                    className="visual-list-item-icon" 
                    icon={faExternalLinkAlt} 
                    onClick={onClick}/>
            </div> */}
        </div>
    )
}

export default withRouter(VisualListItem);