const API = (path) => {
    return (
        `https://api.themoviedb.org/3/${path}?api_key=f3e86b006ceea988168f3bd390cb831f`
    )
}

export default API;