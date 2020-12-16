import React from 'react';

import ReleaseIndex from './release_index';

const PlaylistIndex = ({ music, setMusic }) => {
    return (
        <ReleaseIndex 
            medium={'playlist'} 
            music={music}
            setMusic={setMusic}
            title={"All Playlists"} />
    )
}

export default PlaylistIndex;