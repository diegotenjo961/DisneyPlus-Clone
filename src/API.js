const API = (path) => {
    const KEY = process.env.REACT_APP_API_KEY;

    return (
        `https://api.themoviedb.org/3/${path}?api_key=${KEY}`
    )
}

export default API;