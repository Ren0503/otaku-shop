import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
    HomeScreen,
    AboutScreen,
    ContactScreen
} from '../screens/Home'

import { ScrollToTop } from '../components/shared'

export default function HomeRoutes() {
    return (
        <ScrollToTop>
            <Switch>
                <Route path='/' component={HomeScreen} exact />
                <Route path='/about' component={AboutScreen} exact />
                <Route path='/contact' component={ContactScreen} exact/>
            </Switch>
        </ScrollToTop>
    )
}