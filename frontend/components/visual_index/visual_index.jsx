import React, { useEffect, useState } from 'react';

import visualApi from '../../util/visual_api_util';
import VisualIndexItem from './visual_index_item';

const VisualIndex = props => {
    const [visuals, setVisuals] = useState();

    const fetchVisuals = () => {
        visualApi.fetchVisuals().then(visuals => {
            const visualsArray = Object.values(visuals);
            setVisuals(visualsArray);
        })
    }

    useEffect(() => {
        fetchVisuals();
    }, []);


    return (
        <div>
            <div className="visual-index-container content">
                <div className="visual-index-header">
                    <h1 className="p-color">Visual Art</h1>
                </div>
                <ul className="visual-index">
                    {visuals && visuals.map(visual => 
                        <VisualIndexItem visual={visual} key={visual.id} />)}
                </ul>
            </div>
        </div>
    )
}

export default VisualIndex;