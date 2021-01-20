import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import { Product } from '../../components/products'
import { Loader, Message } from '../../components/services'

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
            <h1>Latest Products</h1>
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