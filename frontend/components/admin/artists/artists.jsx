import React, { useState } from 'react';

import ArtistEditForm from './artist_edit_form';
import ArtistForm from './artist_form';
import ArtistsList from './artist_list';

const Artists = props => {
    const [artist, setArtist] = useState();

    const form = artist ? (
        <ArtistEditForm artist={artist} setArtist={setArtist} />
    ) : ( 
        <ArtistForm /> 
    );

    return (
        <div className="admin">
            {form}
            <ArtistsList 
                setArtist={setArtist}
            />
        </div>
    )
}

export default Artists;