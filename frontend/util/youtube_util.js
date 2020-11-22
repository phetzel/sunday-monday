const key = 'AIzaSyDxlLeVp2UcirRls5A-Xp_7MS68J35nrNo';


const fetchVideoFromYoutube = id => {
    const url = `https://www.googleapis.com/youtube/v3/videos?`
        + `key=${key}`
        + `&part=snippet`
        + `&playlistId=${id}`;

    fetch(url)
        .then(res => res.json())
        .then(res => console.log(res))
}

const fetchPlaylistFromYoutube = (id, func) => {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?`
        + `key=${key}`
        + `&maxResults=50`
        + `&part=snippet`
        + `&playlistId=${id}`;

    fetch(url)
        .then(res => res.json())
        .then(res => func(res));
}


export default {
    fetchPlaylistFromYoutube,
    fetchVideoFromYoutube
}