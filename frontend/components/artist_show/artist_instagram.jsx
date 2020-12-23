import React, { useEffect, useState } from 'react';
import Feed from "react-instagram-authless-feed";


const ArtistInstagram = () => {
    const [first, setFirst] = useState();
    const [pictures1, setPictures1] = useState();

    useEffect(() => {
        // const url= `https://graph.instagram.com/7448666217/media?`
        // + `fields=id,media_url,media_type`
        // + `&access_token=${InstagramToken}`;

        const url = 'https://www.instagram.com/ridlmusic/?__a=1';
        console.log(url);

        fetch(url)
            .then(res => console.log(res));

        // const images = data.filter(img => img.media_type === "IMAGE");
        // setFirst(images[0]);
        // setPictures1(images.slice(1,9));
    }, [])

    return (
        <div>
        <div className="artist-instagram-container"> 
             {/* <div className="artist-instagram">
                { pictures1 &&
                    <div className="artist-instagram-row">
                        <img className="insta-pic-large" src={first.media_url} />
                        <ul className="artist-instagram-list">
                            { pictures1.map(pic => (
                                <li>
                                    <img 
                                        className="insta-pic-small"
                                        src={pic.media_url} alt=""/>
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div> */}
            {/* <Feed userName="ask_me_about_frank" className="Feed" limit={9} /> */}
        </div>

        </div>
    )
}

export default ArtistInstagram;