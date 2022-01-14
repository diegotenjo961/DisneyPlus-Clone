import React from 'react';
import Navbar from './components/Navbar'
import FooterNav from './components/FooterNav'
import Home from './components/Home'
import Detail from './components/Detail'
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
				<FooterNav />
      </Router>
    </div>
  );
}

export default App;
