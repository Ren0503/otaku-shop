import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { Loader , Message } from '../shared'
import { listTopProducts } from '../../actions/productActions'

const SingleCarousel = () => {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { loading, error, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <Carousel pause='hover' className='bg-dark'>
            {products.map((product) => (
                <Carousel.Item key={product._id}>
                    <Row>
                        <Col md={6}>
                            <Image src={product.image} atl={product.name}/>
                        </Col>
                        <Col md={6}>
                            <Carousel.Caption className='carousel-caption'>
                                <h2> {product.name} (${product.price}) </h2>
                                <p> {product.description} </p>
                                <Link to={`/product/${product._id}`}>
                                    <Button variant="primary">
                                        See more
                                    </Button>
                                </Link>
                            </Carousel.Caption>
                        </Col>
                    </Row>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default SingleCarousel