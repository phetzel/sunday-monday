import React, { useEffect, useState } from 'react';

import BottomNav from '../navBar/bottom_nav';
import visualApi from '../../util/visual_api_util';

const VisualShow = ({ match}) => {
    const [visual, setVisual] = useState();

    const fetchVisual = () => {
        const id = match.params.id;
        visualApi.fetchVisual(id).then(visual => {
            setVisual(visual);
        })
    }

    useEffect(() => {
        fetchVisual();
    }, []);
    

    return(
        <div>
            <BottomNav />
            <div className="visual-show content">
                {visual && 
                    <div className="visual-show-details">
                        <img src={visual.photoUrl} alt={visual.title}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default VisualShow;