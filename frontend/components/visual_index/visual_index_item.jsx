import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const VisualListItem = ({visual, onClick}) => {

    return (
        <div className="visual-list-item">
            <img alt={visual.title} src={visual.photoUrl} title={visual.title}/>
            <div className="visual-list-item-bottom">
                <h6>{visual.title}</h6>
                <FontAwesomeIcon 
                    className="visual-list-item-icon" 
                    icon={faExternalLinkAlt} 
                    onClick={onClick}/>
                {/* <img
                    src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-9@2x.svg"
                />

                <img
                    class="visual-list-arrow-icon"
                    src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd61c05553a65eb4e757fdd/img/vector-10@2x.svg"
                /> */}
            </div>
        </div>
    )
}

export default withRouter(VisualListItem);