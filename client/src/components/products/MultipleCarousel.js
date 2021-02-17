import React, { useEffect } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Image, Card, Button, CardGroup } from 'react-bootstrap'
import { Loader, Message } from '../shared'
import { listProductsGenres } from '../../actions/productActions'

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const MultiCarousel = ({ genresDef }) => {
    const genres = genresDef
    const dispatch = useDispatch()
    const productGenres = useSelector(state => state.productGenres)
    const { loading, error, products } = productGenres

    useEffect(() => {
        dispatch(listProductsGenres(genres))
    }, [dispatch, genres])

    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <CardGroup>
            {products.map((product) => (
                <Card>
                    <Link to={`/product/${product._id}`}>
                        <Card.Img src={product.image} variant='top' />
                    </Link>


                    <Card.Body>
                        <Link to={`/product/${product._id}`}>
                            <Card.Title as='div'>
                                <strong>{product.name}</strong>
                            </Card.Title>
                        </Link>
                        <Card.Text as='h3'>${product.price}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </CardGroup>
    )
}

export default MultiCarousel