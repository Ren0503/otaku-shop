import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Breadcrumb } from 'react-bootstrap'

import { Product } from '../../components/products'
import { Meta, Loader, Message } from '../../components/shared'

import { listProductsGenres } from '../../actions/productActions'

const ProductGenresScreen = ({ match }) => {
    const genres = match.params.genre

    const dispatch = useDispatch()
    const productGenres = useSelector(state => state.productGenres)
    const { loading, error, products } = productGenres

    useEffect(() => {
        dispatch(listProductsGenres(genres))
    }, [dispatch, genres])

    return (
        <>
            <Meta />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/product">Product</Breadcrumb.Item>
                <Breadcrumb.Item active>{genres.toUpperCase()}</Breadcrumb.Item>
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

export default ProductGenresScreen