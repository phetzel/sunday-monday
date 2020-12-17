import React, { useState } from 'react';

import VisualEditForm from './visual_edit_form';
import VisualForm from './visual_form';
import VisualList from './visual_list';

const Visuals = () => {
    const [visual, setVisual] = useState();

    const form = visual ? (
        <VisualEditForm visual={visual} setVisual={setVisual} />
    ) : ( 
        <VisualForm /> 
    );

    return (
        <div className="admin">
            {form}
            <VisualList 
                setVisual={setVisual} />
        </div>
    )
}

export default Visuals;