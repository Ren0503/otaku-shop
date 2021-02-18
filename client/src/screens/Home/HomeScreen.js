import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Card, CardGroup } from 'react-bootstrap'

import home from '../../assets/images/home.jpg'
import { Meta, Loader, Message, Paginate } from '../../components/shared'
import { Product, MultipleCarousel, SingleCarousel } from '../../components/products'

import { listProductsGenres } from '../../actions/productActions'

const HomeScreen = ({}) => {
    const dispatch = useDispatch()
    const productGenres = useSelector(state => state.productGenres)
    const { loading, error, products } = productGenres

    useEffect(() => {
        dispatch(listProductsGenres())

    }, [dispatch, ])

    return (
        <>
            <Meta />
            <Card className="bg-dark text-white">
                <Card.Img src={home} alt="Home image" fluid/>
                <Card.ImgOverlay>
                    <Card.Title variant="light">
                        <h2>Otaku Figure Shop</h2>
                    </Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Container>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <>
                        <CardGroup>
                            {[
                            'Info',
                            'Success',
                            'Warning'
                            ].map((variant, idx) => (
                            <Card
                                bg={variant.toLowerCase()}
                                key={idx}
                                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                style={{ width: '18rem' }}
                                className="mb-2"
                            >
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                <Card.Title>{variant} Card Title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            ))}
                        </CardGroup>
                        <MultipleCarousel />
                    </>
                )}
            </Container>
        </>
    )
}

export default HomeScreen