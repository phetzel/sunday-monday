import React, { useState, useEffect } from 'react';

import visualApi from '../../../util/visual_api_util';

const VisualList = ({ setVisual }) => {
    const [visuals, setVisuals] = useState();

    const fetchVisuals = () => {
        visualApi.fetchVisuals().then(visuals => {
            const visualsArray = Object.values(visuals);
            setVisuals(Array.from(visualsArray));
        })
    }

    const deleteVisual = (id) => {
        visualApi.deleteVisual(id).then(visuals => {
            const visualsArray = Object.values(visuals);
            setVisuals(Array.from(visualsArray));
        });
    }

    const handleClick = (visual) => {
        setVisual(visual);
    }

    useEffect(() => {
        fetchVisuals();
    }, []);

    return (
        <div className="admin-list">
            <h2>Edit Visuals</h2>
            <ul>
                { visuals &&
                    visuals.map(visual => (
                    <li key={visual.id} onClick={() => handleClick(visual)}>
                        <p>{visual.title}</p>
                        <i onClick={() => deleteVisual(visual.id)}>&#128465;</i>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default VisualList;