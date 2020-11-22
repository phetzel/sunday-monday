
const fetchVideoFromYoutube = id => {
    const url = `https://www.googleapis.com/youtube/v3/videos?`
        + `key=${window.googleAPIKey}`
        + `&part=snippet`
        + `&playlistId=${id}`;

    fetch(url)
        .then(res => res.json())
        .then(res => console.log(res))
}

const fetchPlaylistFromYoutube = (id, func) => {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?`
        + `key=${window.googleAPIKey}`
        + `&maxResults=50`
        + `&part=snippet`
        + `&playlistId=${id}`;

    fetch(url)
        .then(res => res.json())
        .then(res => {
            const songsArr = [];
            res.items.forEach(i => songsArr.push(i.snippet));
            func(songsArr);
        });
}


export default {
    fetchPlaylistFromYoutube,
    fetchVideoFromYoutube
}