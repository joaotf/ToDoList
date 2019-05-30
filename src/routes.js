import React from 'react';

import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Main from './pages/main'
import Storage from './pages/storage'
import Update from './pages/update'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/add" component={Storage} />
            <Route path="/update/:id" component={Update} />
        </Switch>
    </BrowserRouter>
);


export default Routes;