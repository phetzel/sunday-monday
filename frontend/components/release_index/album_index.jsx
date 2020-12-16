import React from 'react';

import ReleaseIndex from './release_index';

const AlbumIndex = ({ music, setMusic }) => {
    return (
        <ReleaseIndex 
            medium={'album'}
            music={music}
            setMusic={setMusic}
            title={"All Releases"} />
    )
}

export default AlbumIndex;