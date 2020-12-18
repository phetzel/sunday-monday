import React, { useEffect, useState } from 'react';

import visualApi from '../../util/visual_api_util';
import VisualIndex from './visual_index';

const VisualAllIndex = props => {
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
            <div className="visual-index-outter-container">
                <div className="visual-index-container">

                    <div className="header-container">
                      <div className="header">
                        <h1><span>VISUAL ART</span></h1>
                      </div>
                    </div>
                    
                    <div className="header-rect" />

                    {visuals && 
                        <VisualIndex visuals={visuals} />
                    }
                </div>
            </div>
        </div>
    )
}

export default VisualAllIndex;
