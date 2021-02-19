import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Breadcrumb } from 'react-bootstrap'

import { MultipleProducts } from '../../components/products'
import { Meta, Loader, Message } from '../../components/shared'
import { Sidebar } from '../../components/core'

import { listProductsPrice } from '../../actions/productActions'

import Lottie from 'lottie-react-web'
import emptyBox from '../../assets/animated/empty-box.json'

const ProductPriceScreen = ({ match }) => {
    const bottom = match.params.bottom
    const top = match.params.top

    const dispatch = useDispatch()
    const productPrice = useSelector(state => state.productPrice)
    const { loading, error, products } = productPrice

    useEffect(() => {
        dispatch(listProductsPrice(bottom, top))
    }, [dispatch, bottom, top])

    return (
        <>
            <Meta />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/product">Product</Breadcrumb.Item>
                <Breadcrumb.Item active>Price</Breadcrumb.Item>
            </Breadcrumb>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    <Col md={9}>
                        {products.length === 0 ? (
                                <>
                                    Not found products
                                    <Lottie     
                                        options={{
                                            animationData: emptyBox,
                                            height: 80,
                                        }}
                                    />
                                </>
                            ) : (
                            <MultipleProducts products={products} />
                        )}                    
                    </Col>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                </Row>
            )}
        </>
    )
}

export default ProductPriceScreen