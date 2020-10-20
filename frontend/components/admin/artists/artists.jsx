import React from 'react';

import ArtistForm from './artist_form';
import ArtistsList from './artist_list';
import ArtistList from './artist_list';

const Artists = props => {
    return (
        <div className="admin-artist">
            <ArtistForm />
            <ArtistsList />
        </div>
    )
}

export default Artists;