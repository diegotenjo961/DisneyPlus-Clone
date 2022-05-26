import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import Detail from './components/Detail'
import Login from './components/Login'
import Loading from './components/Loading'

import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { setUserLogin } from './features/user/userSlice'

function App () {
  const dispatch = useDispatch()
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <Loading />
  }
  console.log(user)
  console.log(isAuthenticated)
  if (isAuthenticated) {
    dispatch(setUserLogin({
      name: user.name,
      email: user.email,
      photo: user.picture
    }))
  }

  return (
    <div className='App'>
      <Router>
        <Layout>
        <Switch>
          <Route path='/detail/:id'>
            <Detail />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        </Layout>
      </Router>
    </div>
  )
}

export default App
