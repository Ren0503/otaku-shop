import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
    ProductDetailScreen,
    ProductHomeScreen,
    CartScreen,
} from '../screens/Product'

import {
    ProductBrandScreen,
    ProductSeriesScreen,
    ProductPriceScreen,
    ProductGenresScreen,
} from '../screens/Category'

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
            <Route path='/category/genres/:genre' component={ProductGenresScreen} />
            <Route path='/category/series/:series' component={ProductSeriesScreen} />
            <Route path='/category/brand/:brand' component={ProductBrandScreen} />
            <Route path='/category/price/:bottom/to/:top' component={ProductPriceScreen} />
            <Route path='/product/:id' component={ProductDetailScreen} />
            <Route path='/product' component={ProductHomeScreen} exact />
            <Route path='/cart/:id?' component={CartScreen} />
        </Switch>
    )
}