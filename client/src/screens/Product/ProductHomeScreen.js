import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import { Meta, Loader, Message, Paginate } from '../../components/shared'
import { Product, SingleCarousel, MultipleProducts } from '../../components/products'
import { Sidebar } from '../../components/core'

import { listProducts } from '../../actions/productActions'

const ProductHomeScreen = ({ match }) => {
    const keyword = match.params.keyword

    const pageNumber= match.params.pageNumber || 1
    
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products, page, pages} = productList

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))

    }, [dispatch, keyword, pageNumber])

    return (
        <>
            <Meta />
            {!keyword ? (
                <SingleCarousel />
            ) : (
                <Link to='/' className='btn btn-light'>
                    Go Back
                </Link>
            )}
            <h1>Latest Products</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    <Col md={9}>
                        <MultipleProducts products={products} />
                        <Paginate 
                            pages={pages}
                            page={page}
                            keyword={keyword ? keyword : ''}
                        />
                    </Col>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                </Row>
            )}
        </>
    )
}

export default ProductHomeScreen