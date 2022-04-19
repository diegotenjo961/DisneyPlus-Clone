const KEY = process.env.REACT_APP_API_KEY

export const clientId = process.env.REACT_APP_CLIENT_ID

export const getApiUrl = path => `https://api.themoviedb.org/3/${path}?api_key=${KEY}`

export const domain = process.env.REACT_APP_AUTH0_DOMAIN
export const authClientId = process.env.REACT_APP_AUTH0_CLIENT_ID
export const redirectUri = process.env.REACT_APP_AUTH0_REDIRECT_URI || 'http://localhost:3000'
export const redirectUriLogout = process.env.REACT_APP_AUTH0_REDIRECT_URI_LOGOUT || 'http://localhost:3000/login'
