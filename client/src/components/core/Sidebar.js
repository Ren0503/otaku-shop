import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

const Sidebar = () => {
    return (
        <>
        <h2>Category</h2>
        <ListGroup>
            <strong>Series</strong>
            <Link to='/category/series/kimetsu'>
                <ListGroup.Item>
                    Kimetsu No Yaiba
                </ListGroup.Item>
            </Link>
            <Link to='/category/series/naruto'>
                <ListGroup.Item>
                    Naruto SHIPPUDEN
                </ListGroup.Item>
            </Link>
            <Link to='/category/series/one'>
                <ListGroup.Item>
                    One Pieces
                </ListGroup.Item>
            </Link>
            <Link to='/category/series/titan'>
                <ListGroup.Item>
                    Attack On Titan
                </ListGroup.Item>
            </Link>
        </ListGroup>
        <hr />
        <ListGroup>
            <strong>Brand</strong>
            <Link to='/category/brand/kotobukiya'>
                <ListGroup.Item>
                    Kotobukiya
                </ListGroup.Item>
            </Link>
            <Link to='/category/brand/bandai'>
                <ListGroup.Item>
                    Bandai Studio
                </ListGroup.Item>
            </Link>
            <Link to='/category/brand/mac'>
                <ListGroup.Item>
                    Mac Factory
                </ListGroup.Item>
            </Link>
            <Link to='/category/brand/aniplex'>
                <ListGroup.Item>
                    Aniplex
                </ListGroup.Item>
            </Link>
            <Link to='/category/brand/orange'>
                <ListGroup.Item>
                    Orange Rouge
                </ListGroup.Item>
            </Link>
            <Link to='/category/brand/alter'>
                <ListGroup.Item>
                    Alter
                </ListGroup.Item>
            </Link>
        </ListGroup>
        <hr />
        <ListGroup>
            <strong>Price</strong>
            <Link to='/category/price/0/to/50'>
                <ListGroup.Item>
                    0 to $50
                </ListGroup.Item>
            </Link>
            <Link to='/category/price/50/to/100'>
                <ListGroup.Item>
                    $50 to $100
                </ListGroup.Item>
            </Link>
            <Link to='/category/price/100/to/200'>
                <ListGroup.Item>
                    $100 to $200
                </ListGroup.Item>
            </Link>
            <Link to='/category/price/200/to/500'>
                <ListGroup.Item>
                    $200 to $500
                </ListGroup.Item>
            </Link>
            <Link to='/category/price/500/to/1000'>
                <ListGroup.Item>
                    $500 to $1000
                </ListGroup.Item>
            </Link>
        </ListGroup>
        </>
    )
}

export default Sidebar