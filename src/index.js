import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './styles/global.css'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'
import {
  domain,
  authClientId,
  redirectUri
} from './config'

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={authClientId}
    redirectUri={redirectUri}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
)
