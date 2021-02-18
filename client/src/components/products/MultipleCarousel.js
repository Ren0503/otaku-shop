import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useDispatch, useSelector } from 'react-redux'
import { Card, Button } from 'react-bootstrap'

import { Loader, Message } from '../shared'
import { listTopProducts } from '../../actions/productActions'

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

const MultipleCarousel = () => {
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
            
                <Slider {...settings}>
                    {products.map((product) => (
                        <div className="p-3">
                        <Card key={product._id} className="card-slider text-center">
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text as='div'>${product.price}</Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={product.image} />
                            
                            <Card.Footer>
                                <Link to={`/product/${product._id}`}>
                                    <Button variant="primary">
                                        See more
                                    </Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                        </div>
                    ))}
                </Slider>
            )
}

export default MultipleCarousel