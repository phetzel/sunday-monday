import React, { useState } from 'react';

import ReleaseEditForm from './release_edit_form';
import ReleaseForm from './release_form';
import ReleaseList from './release_list';

const Releases = () => {
    const [release, setRelease] = useState();

    const form = release ? (
        <ReleaseEditForm release={release} setRelease={setRelease} />
    ) : ( 
        <ReleaseForm /> 
    );
    return (
        <div className="admin">
            {form}
            <ReleaseList 
                setRelease={setRelease} />
        </div>
    )
}

export default Releases;