import React, { useEffect, useState } from 'react';

const ArtistInstagram = ({ instagram }) => {
    const [first, setFirst] = useState();
    const [pictures1, setPictures1] = useState();

    useEffect(() => {
        // const url= `https://graph.instagram.com/7448666217/media?`
        // + `fields=id,media_url,media_type`
        // + `&access_token=${InstagramToken}`;

        // const images = data.filter(img => img.media_type === "IMAGE");
        // setFirst(images[0]);
        // setPictures1(images.slice(1,9));

        const url = `https://www.instagram.com/${instagram}/?__a=1`;
        console.log(url);
        console.log(instagram);

        fetch(url)
            .then(response => response.json(), err => console.log(err))
            .then(res => {
                const images = res.graphql.user.edge_owner_to_timeline_media.edges;
                setFirst(images[0]);
                setPictures1(images.slice(1,9));
            });
    }, [])

    return (
        <div className="artist-instagram-container"> 
            <h1>New Photos</h1>
             <div className="artist-instagram">
                { pictures1 &&
                    <div className="artist-instagram-row">
                        <img className="insta-pic-large" src={first.node.thumbnail_src} />
                        <ul className="artist-instagram-list">
                            { pictures1.map(pic => (
                                <li>
                                    <img 
                                        className="insta-pic-small"
                                        src={pic.node.thumbnail_src} alt=""/>
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>

            { /* Instagram Display Api*/}
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
        </div>
    )
}

export default ArtistInstagram;