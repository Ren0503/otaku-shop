import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Breadcrumb } from 'react-bootstrap'

import { MultipleProducts } from '../../components/products'
import { Meta, Loader, Message } from '../../components/shared'
import { Sidebar } from '../../components/core'

import { listProductsBrand } from '../../actions/productActions'

const ProductBrandScreen = ({ match }) => {
    const brand = match.params.brand

    const dispatch = useDispatch()
    const productBrand = useSelector(state => state.productBrand)
    const { loading, error, products } = productBrand

    useEffect(() => {
        dispatch(listProductsBrand(brand))
    }, [dispatch, brand])

    return (
        <>
            <Meta />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/product">Product</Breadcrumb.Item>
                <Breadcrumb.Item active>{brand.toUpperCase()}</Breadcrumb.Item>
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

export default ProductBrandScreen