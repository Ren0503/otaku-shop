import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Breadcrumb } from 'react-bootstrap'

import { Product } from '../../components/products'
import { Loader, Message } from '../../components/shared'

import { listProductsSeries } from '../../actions/productActions'

const ProductSeriesScreen = ({ match }) => {
    const series = match.params.serie

    const dispatch = useDispatch()
    const productSeries = useSelector(state => state.productSeries)
    const { loading, error, products } = productSeries

    useEffect(() => {
        dispatch(listProductsSeries(series))
    }, [dispatch, series])

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Product</Breadcrumb.Item>
            </Breadcrumb>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Row>
                        {products.map((product) => (
                            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </>
    )
}

export default ProductSeriesScreen