import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Image, Row, Card, Button, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { Loader , Message } from '../shared'
import { listProductsLimit } from '../../actions/productActions'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
    className: "center",
    centerMode: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 500,
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

var sectionStyle = {
    width: 'auto',
    height: '350px',
}

const ProductsLimited = ({  }) => {
    const dispatch = useDispatch()

    const productLimit = useSelector(state => state.productLimit)
    const { loading, error, products } = productLimit

    useEffect(() => {
        dispatch(listProductsLimit())
    }, [dispatch])

    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <Slider {...settings}>
            {products.map((product) => (
                <div className='p-3'>
                    <Card key={product._id} className="card-slider text-center">
                            <Card.Img style={sectionStyle} variant="top" src={product.image} />
                            <Card.Body>
                                <Link to={`/product/${product._id}`}>
                                    <Card.Title>{product.name}</Card.Title>
                                </Link>
                                <Card.Text as='div'>${product.price}</Card.Text>
                            </Card.Body>
                    </Card>
                </div>
            ))}
        </Slider>
    )
}

export default ProductsLimited