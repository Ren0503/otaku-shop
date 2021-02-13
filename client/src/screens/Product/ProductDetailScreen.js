import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react-web'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
} from 'react-image-magnifiers'

import shoppingCart from '../../assets/animated/shopping-cart.json'
import { Meta, Loader, Message } from '../../components/services'
import { Rating } from '../../components/products'

import {
  listProductDetails,
  createProductReview,
} from '../../actions/productActions'

import { PRODUCT_CREATE_REVIEW_RESET } from '../../constants/productConstants'


const ProductDetailScreen = ({ history, match }) => {
    const [quantity, setQuantity] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const {
        success: successProductReview,
        loading: loadingProductReview,
        error: errorProductReview,
    } = productReviewCreate

    useEffect(() => {
        if(successProductReview) {
            setRating(0)
            setComment('')
        }
        if(!product._id || product._id !== match.params.id) {
            dispatch(listProductDetails(match.params.id))
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }
    }, [dispatch, match, successProductReview])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?quantity=${quantity}`)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            createProductReview(match.params.id, {
                rating,
                comment,
            })
        )
    }

    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                <Meta title={product.name} />
                <h2>{product.name}</h2>
                <Row>
                    <Col md={6}>
                        <Magnifier
                            imageSrc={product.image} 
                            imageAlt={product.name}
                            largeImageSrc={product.image}  // Optional
                            mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
                            touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
                        />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h5>Description</h5>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Rating 
                                    value={product.rating}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price : ${product.price}
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                Character: {product.character}
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                Size: {product.size}
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                Brand: {product.brand}
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                Series: {product.series}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price: </Col>
                                        <Col>
                                            <strong>${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status : </Col>
                                        <Col>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Quantity</Col>
                                        <Col>
                                            <Form.Control
                                                as='select'
                                                value={quantity}
                                                onChange={(e) => setQuantity(e.target.value)}
                                            >
                                                {[...Array(product.countInStock).keys()].map(
                                                    (x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                        </option>
                                                    )
                                                )}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                )}

                                <ListGroup.Item>
                                    <Button
                                        onClick={addToCartHandler}
                                        className='btn-block'
                                        type='button'
                                        disabled={product.countInStock === 0}
                                    >
                                    Add To Cart
                                    </Button>
                                    <Lottie options={{
                                        animationData: shoppingCart
                                    }}/>
                                </ListGroup.Item>

                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <h2>Reviews</h2>
                        {product.reviews.length === 0 && <Message>No Reviews</Message>}
                        <ListGroup variant='flush'>
                            {product.reviews.map((review) => (
                                <ListGroup.Item key={review._id}>
                                    <strong>{review.name}</strong>
                                    <Rating value={review.rating} />
                                    <p>{review.createdAt.substring(0, 10)}</p>
                                    <p>{review.comment}</p>
                                </ListGroup.Item>
                            ))}
                            <ListGroup.Item>
                            <h2>Write a Customer Review</h2>
                            {successProductReview && (
                                <Message variant='success'>
                                Review submitted successfully
                                </Message>
                            )}
                            {loadingProductReview && <Loader />}
                            {errorProductReview && (
                                <Message variant='danger'>{errorProductReview}</Message>
                            )}
                            {userInfo ? (
                                <Form onSubmit={submitHandler}>
                                    <Form.Group controlId='rating'>
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control
                                            as='select'
                                            value={rating}
                                            onChange={(e) => setRating(e.target.value)}
                                        >
                                            <option value=''>Select...</option>
                                            <option value='1'>1 - Poor</option>
                                            <option value='2'>2 - Fair</option>
                                            <option value='3'>3 - Good</option>
                                            <option value='4'>4 - Very Good</option>
                                            <option value='5'>5 - Excellent</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='comment'>
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control
                                            as='textarea'
                                            row='3'
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                    <Button
                                        disabled={loadingProductReview}
                                        type='submit'
                                        variant='primary'
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            ) : (
                                <Message>
                                Please <Link to='/login'>sign in</Link> to write a review{' '}
                                </Message>
                            )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                </>
            )}
        </>
    )
}

export default ProductDetailScreen