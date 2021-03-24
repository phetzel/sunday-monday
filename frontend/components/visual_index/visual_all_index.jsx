import React, { useEffect, useState } from 'react';

import visualApi from '../../util/visual_api_util';
import VisualIndex from './visual_index';

const VisualAllIndex = props => {
    return (
        <div>
            <div className="content-container">
                <div className="content">

                    <div className="header-container">
                      <div className="header">
                        <h1><span>VISUAL ART</span></h1>
                      </div>
                    </div>
                    
                    <div className="header-rect" />

                    <VisualIndex />
                </div>
            </div>
        </div>
    )
}

export default VisualAllIndex;
