import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Image } from 'react-bootstrap'

import brand1 from '../../assets/images/brand_logo_1.jpg'
import brand2 from '../../assets/images/brand_logo_2.jpg'
import brand3 from '../../assets/images/brand_logo_3.jpg'
import brand4 from '../../assets/images/brand_logo_4.jpg'
import brand5 from '../../assets/images/brand_logo_5.jpg'
import brand6 from '../../assets/images/brand_logo_6.jpg'
import brand7 from '../../assets/images/brand_logo_7.jpg'

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

const BrandCarousel = () => {
    return (
        <Slider {...settings}>
            <Link to={`/category/brand/smile`} className='brand'>
                <Image src={brand1} thumbnail height="80" />
            </Link>
            <Link to={`/category/brand/max`} className='brand'>
                <Image src={brand2} thumbnail />
            </Link>
            <Link to={`/category/brand/bandai`} className='brand'>
                <Image src={brand3} thumbnail />
            </Link>
            <Link to={`/category/brand/kotobuyaki`} className='brand'>
                <Image src={brand4} thumbnail />
            </Link>
            <Link to={`/category/brand/aniplex`} className='brand'>
                <Image src={brand5} thumbnail />
            </Link>
            <Link to={`/category/brand/alter`} className='brand'>
                <Image src={brand6} thumbnail />
            </Link>
            <Link to={`/category/brand/cloud`} className='brand'>
                <Image src={brand7} thumbnail />
            </Link>
        </Slider>
    )
}

export default BrandCarousel