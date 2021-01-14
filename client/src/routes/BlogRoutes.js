import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
    BlogGuideScreen,
    BlogDetailScreen,
} from '../screens/Blogs'

export default function BlogRoutes() {
    return (
        <Switch>
            <Route path='/blog' component={BlogGuideScreen} />
            <Route path='/blog/:id' component={BlogDetailScreen} />
        </Switch>
    )
}