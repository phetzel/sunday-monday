import React, { useEffect } from 'react';
import Feed from "react-instagram-authless-feed";

const ArtistInstagram = () => {
    useEffect(() => {
        const url = `https://ig.instant-tokens.com/users/061bc119-a4a7-4653-85d6-8bdc414f9fa6/instagram/17841401610972952/token?userSecret=madbvntmaon5hhbh1w0cdr`;
        fetch(url).then(res => console.log(res));
    }, [])

    return (
        <div className="artist-instagram-container">
            <div className="artist-instagram">
                {/* <Feed userName="ridlmusic" className="Feed" classNameLoading="Loading" limit="18"/> */}
            </div>
        </div>
    )
}

export default ArtistInstagram;