import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ProductHomeScreen from '../screens/Product/ProductHomeScreen'

export default function HomeRoutes() {
    return (
        <Switch>
            <Route path='/search/:keyword' component={ProductHomeScreen} exact />
            <Route path='/page/:pageNumber' component={ProductHomeScreen} exact />
            <Route
                path='/search/:keyword/page/:pageNumber'
                component={ProductHomeScreen}
                exact
            />
            <Route path='/' component={ProductHomeScreen} exact />
        </Switch>
    )
}