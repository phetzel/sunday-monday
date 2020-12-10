import React, { useEffect, useState } from 'react';

import visualApi from '../../util/visual_api_util';
import VisualShowArtists from './visual_show_artists';

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

    console.log(visual);
    
    return(
        <div>
            <div className="visual-show content">
                {visual && 
                    <div className="visual-show-details">
                        <img src={visual.photoUrl} alt={visual.title}/>
                    </div>
                }
                {visual && visual.artists.length > 0 &&
                    <div className="artist-association-container">
                        <VisualShowArtists artists={visual.artists} />
                    </div>
                }
            </div>
        </div>
    )
}

export default VisualShow;