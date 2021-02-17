import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
    ProductDetailScreen,
    ProductSeriesScreen,
    ProductGenresScreen,
    ProductHomeScreen,
    CartScreen,
} from '../screens/Product'

export default function ProductRoutes() {
    return (
        <Switch>
            <Route path='/search/:keyword' component={ProductHomeScreen} exact />
            <Route path='/page/:pageNumber' component={ProductHomeScreen} exact />
            <Route
                path='/search/:keyword/page/:pageNumber'
                component={ProductHomeScreen}
                exact
            />
            <Route path='/product/genres/:genre' component={ProductGenresScreen} />
            <Route path='/product/genres/:genre/page/:pageNumber' component={ProductGenresScreen} />
            <Route path='/product/series/:serie' component={ProductSeriesScreen} />
            <Route path='/product/:id' component={ProductDetailScreen} />
            <Route path='/product' component={ProductHomeScreen} exact />
            <Route path='/cart/:id?' component={CartScreen} />
        </Switch>
    )
}