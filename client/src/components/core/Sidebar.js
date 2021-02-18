import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

const Sidebar = () => {
    return (
        <>
        <h2>Category</h2>
        <ListGroup>
            <strong>Series</strong>
            <Link to='/product/series/kimetsu'>
                <ListGroup.Item>
                    Kimetsu No Yaiba
                </ListGroup.Item>
            </Link>
            <Link to='/product/series/naruto'>
                <ListGroup.Item>
                    Naruto SHIPPUDEN
                </ListGroup.Item>
            </Link>
            <Link to='/product/series/one'>
                <ListGroup.Item>
                    One Pieces
                </ListGroup.Item>
            </Link>
            <Link to='/product/series/titan'>
                <ListGroup.Item>
                    Attack On Titan
                </ListGroup.Item>
            </Link>
        </ListGroup>
        <hr />
        <ListGroup>
            <strong>Brand</strong>
            <Link to='/product/series/kimetsu'>
                <ListGroup.Item>
                    Kotobukiya
                </ListGroup.Item>
            </Link>
            <Link to='/product/series/naruto'>
                <ListGroup.Item>
                    Good Smile
                </ListGroup.Item>
            </Link>
            <Link to='/product/series/one'>
                <ListGroup.Item>
                    Mac Factory
                </ListGroup.Item>
            </Link>
            <Link to='/product/series/titan'>
                <ListGroup.Item>
                    Aniplex
                </ListGroup.Item>
            </Link>
            <Link to='/product/series/titan'>
                <ListGroup.Item>
                    Orange Rouge
                </ListGroup.Item>
            </Link>
            <Link to='/product/series/titan'>
                <ListGroup.Item>
                    Alter
                </ListGroup.Item>
            </Link>
        </ListGroup>
        <hr />
        <ListGroup>
            <strong>Price</strong>
            <Link to='/product/series/kimetsu'>
                <ListGroup.Item>
                    0 to $50
                </ListGroup.Item>
            </Link>
            <Link to='/product/series/naruto'>
                <ListGroup.Item>
                    $50 to $100
                </ListGroup.Item>
            </Link>
            <Link to='/product/series/one'>
                <ListGroup.Item>
                    $100 to $200
                </ListGroup.Item>
            </Link>
            <Link to='/product/series/titan'>
                <ListGroup.Item>
                    $200 to $500
                </ListGroup.Item>
            </Link>
            <Link to='/product/series/titan'>
                <ListGroup.Item>
                    $500 to $1000
                </ListGroup.Item>
            </Link>
        </ListGroup>
        </>
    )
}

export default Sidebar