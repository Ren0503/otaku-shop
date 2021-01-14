import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
    LoginScreen,
    RegisterScreen,
    ProfileScreen,
} from '../screens/User'

export default function UserRoutes() {
    return (
        <Switch>
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/profile' component={ProfileScreen} />
        </Switch>
    )
}