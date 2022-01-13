const KEY = process.env.REACT_APP_API_KEY;

export const clientId = process.env.REACT_APP_CLIENT_ID;

export const getApiUrl = path => `https://api.themoviedb.org/3/${path}?api_key=${KEY}`;

