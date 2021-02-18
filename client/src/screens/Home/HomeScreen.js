import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Container, Card, CardDeck } from 'react-bootstrap'

import { Meta, Loader, Message } from '../../components/shared'
import { MultipleCarousel } from '../../components/products'

import home from '../../assets/images/home.jpg'
import genres from '../../assets/images/genres.jpg'

import Lottie from 'lottie-react-web'
import creditCard from '../../assets/animated/credit-card.json'
import delivery from '../../assets/animated/icon-delivery.json'
import customer from '../../assets/animated/user-busy.json'
import shoppingCart from '../../assets/animated/shopping-cart.json'

const HomeScreen = ({ }) => {
    return (
        <>
            <Meta />
            <Card className="bg-dark text-white">
                <Card.Img src={home} alt="Home image" fluid />
                <Card.ImgOverlay>
                    <Container className='p-3'>
                        <Card.Title variant="light">
                            <h5>
                                <italic>OtakuFigure.com</italic>
                            </h5>
                            <h2 className="home_title">Bring Your Favorite <br />Character Closer </h2>
                        </Card.Title>
                        <Card.Text as='div'>
                            Was it the proud full sail of his great verse, Bound for the prize of all too precious you,<br />
                            That did my ripe thoughts in my brain inhearse, Making their tomb the womb wherein they grew?<br />
                            Was it his spirit, by spirits taught to write, Above a mortal pitch, that struck me dead?<br />
                            No, neither he, nor his compeers by night Giving him aid, my verse astonished. He, nor that affable<br />
                            familiar ghost Which nightly gulls him with intelligence.
                        </Card.Text>
                        <div className='p-4'>
                            <Link to={`/product`}>
                                <Button variant="info">
                                    Go to shop
                                </Button>
                            </Link>
                        </div>
                    </Container>
                </Card.ImgOverlay>
            </Card>
            <Container>
                <CardDeck className='text-center'>
                    <Card>
                        <Lottie options={{animationData: delivery}} />
                        <Card.Body>
                            <Card.Title>Delivery Service</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Lottie options={{animationData: customer}} />
                        <Card.Body>
                            <Card.Title>200+ Customers</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Lottie options={{animationData: shoppingCart}} />
                        <Card.Body>
                            <Card.Title>Online Shopping</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Lottie options={{animationData: creditCard}} />
                        <Card.Body>
                            <Card.Title>All Cards Accepted</Card.Title>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <h3>Top Rated Products</h3>
                <MultipleCarousel />
            </Container>
            <Card className="bg-dark text-white">
                <Card.Img src={genres} alt="Home genre image" fluid />
                <Card.ImgOverlay>
                    <Container className='p-5'>
                        <Row>
                            <Col sm={12} md={6} lg={3}>
                                <i className='fas fa-deviantart'></i>
                                Action Figure
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <i className='fas fa-flushed'></i>
                                Chibi Figure
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <i className='fas fa-dice-d6'></i>
                                Scale Figure
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <i className='fas fa-book'></i>
                                Art Book
                            </Col>
                        </Row>
                    </Container>
                </Card.ImgOverlay>
            </Card>
            
        </>
    )
}

export default HomeScreen