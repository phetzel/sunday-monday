import React from 'react';
import { withRouter } from 'react-router-dom';

const VisualListItem = ({visual, onClick}) => {

    return (
        <div className="visual-list-item" onClick={onClick}>
            <img alt={visual.title} src={visual.photoUrl} title={visual.title}/>
        </div>
    )
}

export default withRouter(VisualListItem);