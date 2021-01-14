import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
    ProductDetailScreen,
    ProductGenresScreen,
    ProductHomeScreen,
    CartScreen,
} from '../screens/Product'

export default function ProductRoutes() {
    return (
        <Switch>
            <Route path='/product/genres/:genre' component={ProductGenresScreen} />
            <Route path='/product/genres/:genre/page/:pageNumber' component={ProductGenresScreen} />
            <Route path='/product/:id' component={ProductDetailScreen} />
            <Route path='/cart/:id' component={CartScreen} />
        </Switch>
    )
}