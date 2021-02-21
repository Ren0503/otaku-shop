import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
    UserEditScreen,
    UserListScreen,
    ProductListScreen,
    ProductEditScreen,
    OrderListScreen,
} from '../screens/Admin'

import { ScrollToTop } from '../components/shared'

export default function AdminRoutes() {
    return (
        <ScrollToTop>
            <Switch>
                <Route path='/admin/user_list' component={UserListScreen} />
                <Route path='/admin/user/:id/edit' component={UserEditScreen} />
                <Route
                    path='/admin/product_list'
                    component={ProductListScreen}
                    exact
                />
                <Route
                    path='/admin/product_list/:pageNumber'
                    component={ProductListScreen}
                    exact
                />
                <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
                <Route path='/admin/order_list' component={OrderListScreen} />
            </Switch>
        </ScrollToTop>
    )
}