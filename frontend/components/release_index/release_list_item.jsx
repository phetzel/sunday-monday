import React from 'react';
import { withRouter } from 'react-router-dom';

const ReleaseListItem = ({release, history}) => {
    const handleClick = () => {
        history.push(`/music/${release.id}`);
    }

    return (
        <div className="release-list-item" onClick={handleClick}>
            <img alt={release.title} src={window.album} title={release.title}/>
        </div>
    )
}

export default withRouter(ReleaseListItem);