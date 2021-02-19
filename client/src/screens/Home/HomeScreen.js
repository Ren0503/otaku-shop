import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Container, Card, CardDeck, CardColumns, Jumbotron } from 'react-bootstrap'

import { Meta, BrandCarousel } from '../../components/shared'
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
            </Container>
            <Card className="bg-dark text-white genres mt-4">
                <Card.Img src={genres} alt="Home genre image" fluid />
                <Card.ImgOverlay>
                    <Container className='p-5'>
                        <Row className='py-2'>
                            <Col sm={12} md={6} lg={3}>
                                <i className='fab fa-deviantart'></i>
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <i className='fas fa-flushed'></i>
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <i className='fas fa-dice-d6'></i>
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <i className='fas fa-book'></i>
                            </Col>
                        </Row>
                        <Row className='py-2'>
                            <Col sm={12} md={6} lg={3}>
                                <h4>Action Figure</h4>  
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <h4>Chibi Figure</h4>  
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <h4>Scale Figure</h4>  
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <h4>Art Book</h4>  
                            </Col>
                        </Row>
                    </Container>
                </Card.ImgOverlay>
            </Card>
            <Container>
                <h3>Top Rated Products</h3>
                <MultipleCarousel />
            </Container>
            <Jumbotron className='bg-dark' fluid>
                <Container variant='dark'>
                    <h3>Customer Opinion</h3>
                    <CardColumns>
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante."
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Opinion by <cite title="Source Title">Someone</cite>
                            </small>
                        </footer>
                        </blockquote>
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante."
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Opinion by <cite title="Source Title">Someone</cite>
                            </small>
                        </footer>
                        </blockquote>
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante."
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Opinion by <cite title="Source Title">Someone</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </CardColumns>
                </Container>
            </Jumbotron>
            <Container>
                <h3>Popular Brand</h3>
                <BrandCarousel />
            </Container>
        </>
    )
}

export default HomeScreen