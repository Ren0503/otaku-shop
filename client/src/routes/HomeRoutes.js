import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
    HomeScreen,
    AboutScreen,
    ContactScreen
} from '../screens/Home'

export default function HomeRoutes() {
    return (
        <Switch>
            <Route path='/search/:keyword' component={HomeScreen} exact />
            <Route path='/page/:pageNumber' component={HomeScreen} exact />
            <Route
                path='/search/:keyword/page/:pageNumber'
                component={HomeScreen}
                exact
            />
            <Route path='/' component={HomeScreen} exact />
            <Route path='/about' component={AboutScreen} exact />
            <Route path='/contact' component={ContactScreen} exact/>
        </Switch>
    )
}