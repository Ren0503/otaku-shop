import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomeScreen from '../screens/Home/HomeScreen'

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
        </Switch>
    )
}