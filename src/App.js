import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/detail' component={Detail}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
