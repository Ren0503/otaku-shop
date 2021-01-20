import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Breadcrumb } from 'react-bootstrap'

import { Product } from '../../components/products'
import { Loader, Message, Paginate } from '../../components/services'

import { listProductsGenres } from '../../actions/productActions'

const ProductGenresScreen = ({ match }) => {
    const genres = match.params.genre
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()
    const productGenres = useSelector(state => state.productGenres)
    const { loading, error, products, page, pages } = productGenres

    useEffect(() => {
        dispatch(listProductsGenres(genres, pageNumber))
    }, [dispatch, genres, pageNumber])

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
                    <Paginate 
                        pages={pages}
                        page={page}
                    />
                </>
            )}
        </>
    )
}

export default ProductGenresScreen