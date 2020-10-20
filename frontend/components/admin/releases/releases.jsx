import React from 'react';

import ReleaseForm from './release_form';
import ReleaseList from './release_list';

const Releases = () => (
    <div className="admin-release">
        <ReleaseForm />
        <ReleaseList />
    </div>
)

export default Releases;