import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/detail' component={Detail}/>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
