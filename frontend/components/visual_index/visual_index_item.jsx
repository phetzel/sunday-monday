import React from 'react';
import { withRouter } from 'react-router-dom';

const VisualListItem = ({visual, history}) => {
    const handleClick = () => {
        history.push(`/visuals/${visual.id}`);
    }

    return (
        <div className="visual-index-item" onClick={handleClick}>
            <img alt={visual.title} src={visual.photoUrl} title={visual.title}/>
        </div>
    )
}

export default withRouter(VisualListItem);