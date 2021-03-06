import React, { useEffect, useState } from 'react';

import artistApi from '../../util/artist_api_util';
import ArtistInstagram from './artist_instagram';
import ArtistShowDetail from './artist_show_detail';
import ArtistShowEvent from './artist_show_event';
import ArtistShowMusic from './artist_show_music';
import ArtistShowVideo from './artist_show_video';
import ArtistShowVisual from './artist_show_visual';

const ArtistShow = ({ match }) => {
    const [artist, setArtist] = useState();
    const id = match.params.id;

    const fetchArtist = () => {
        artistApi.fetchArtist(id).then(artist => {
            setArtist(artist);
        })
    }

    useEffect(() => {
        fetchArtist();
    }, [id]);
    
    return(
        <div className="content-container">
            <div className="content">
                <div className="header-rect" />
                
                <div className="artist-show">
                    <div className="full-width">
                        {artist && <ArtistShowDetail artist={artist}/>}
                    </div>

                    <div className="artist-show-content">
                        {artist && artist.releases.length > 0 &&
                            <ArtistShowMusic 
                                artist_id={id}
                                releases={artist.releases} />}
                        {artist && artist.videos.length > 0 &&
                            <ArtistShowVideo artist_id={id} videos={artist.videos} />}
                        {artist && artist.visuals.length > 0 &&
                            <ArtistShowVisual artist_id={id} visuals={artist.visuals} />} 

                        {/* {artist && artist.instagram && 
                            <ArtistInstagram instagram={artist.instagram} />
                        } */}

                        {/* {artist && artist.events.length > 0 &&
                            <ArtistShowEvent events={artist.events} />} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistShow;