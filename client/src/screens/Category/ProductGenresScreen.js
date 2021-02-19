import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Breadcrumb } from 'react-bootstrap'

import { MultipleProducts } from '../../components/products'
import { Meta, Loader, Message } from '../../components/shared'
import { Sidebar } from '../../components/core'

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
                <Breadcrumb.Item active>{genres.toUpperCase()} Figure</Breadcrumb.Item>
            </Breadcrumb>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    <Col md={9}>
                        <MultipleProducts products={products} />
                    </Col>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                </Row>
            )}
        </>
    )
}

export default ProductGenresScreen