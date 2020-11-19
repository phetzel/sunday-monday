
// const authenticate = () => (
//     gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
//         .then(() => {
//             console.log("Sign-in successful")
//         }, err => {
//             console.log("Error, signing in", err)
//         })
// )

// const loadClient = () => {
//     gapi.client.setApiKey(window.googleAPIKey);
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(() => {
//             console.log("GAPI client loaded for API")
//         }, err => {
//             console.log("Error loading GAPI for API", err)
//         })
// }

// const youtubeFetchById = async (id) => {
//     const params = {
//         "part": [
//             "contentDetails"
//         ],
//         "id": [
//             id
//         ]
//     }
//     const url = `https://www.googleapis.com/youtube/v3/search?`
//         + `key=${window.googleAPIKey}&`
//         + `&part=contentDetails`
//         + `&id=${id}`;

//     console.log(url);
//     // return gapi.client.youtube.videos.list(params)
//     //     .then(res => {
//     //         console.log("Response", res)
//     //     }, err => {
//     //         console.log(('Executive Error', err))
//     //     })
// };

// export default {
//     authenticate,
//     loadClient,
//     youtubeFetchById
// }