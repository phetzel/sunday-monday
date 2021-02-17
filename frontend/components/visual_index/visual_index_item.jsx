import React from 'react';
import { withRouter } from 'react-router-dom';

import VisualIndexItemArtists from './visual_index_item_artists';

const VisualListItem = ({visual, onClick}) => {
    return (
        <div className="list-item">
            <img alt={visual.title} src={visual.photoUrl} title={visual.title}/>
            <div className="list-item-bottom">
                <div>
                    <h4>{visual.title}</h4>
                    <VisualIndexItemArtists artists={visual.artists} />
                </div>

                <a onClick={onClick}>FULL VIEW</a>
            </div>
        </div>
    )
}

export default withRouter(VisualListItem);