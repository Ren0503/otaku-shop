import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
    ShippingScreen,
    PaymentScreen,
    PlaceOrderScreen,
    OrderScreen,
} from '../screens/Order'

import { ScrollToTop } from '../components/shared'

export default function OrderRoutes() {
    return (
        <ScrollToTop>
            <Switch>
                <Route path='/order/:id' component={OrderScreen} />
                <Route path='/shipping' component={ShippingScreen} />
                <Route path='/payment' component={PaymentScreen} />
                <Route path='/place_order' component={PlaceOrderScreen} />
            </Switch>
        </ScrollToTop>
    )
}