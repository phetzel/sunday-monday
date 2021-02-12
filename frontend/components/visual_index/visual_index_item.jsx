import React from 'react';
import { withRouter } from 'react-router-dom';

const VisualListItem = ({visual, onClick}) => {

    return (
        <div className="list-item">
            <img alt={visual.title} src={visual.photoUrl} title={visual.title}/>
            <div className="list-item-bottom">
                <h4>{visual.title}</h4>
                <a onClick={onClick}>FULL VIEW</a>
            </div>
        </div>
    )
}

export default withRouter(VisualListItem);