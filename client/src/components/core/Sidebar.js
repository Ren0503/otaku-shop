import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

const Sidebar = () => {
    return (
        <>
        <h2>Category</h2>
        <ListGroup className='category'>
            <strong>Series</strong>
            <Link to='/category/series/kimetsu'>
                <ListGroup.Item>
                    <i className='fas fa-arrow-right'></i> Kimetsu No Yaiba
                </ListGroup.Item>
            </Link>
            <Link to='/category/series/naruto'>
                <ListGroup.Item>
                    <i className='fas fa-arrow-right'></i> Naruto SHIPPUDEN
                </ListGroup.Item>
            </Link>
            <Link to='/category/series/one'>
                <ListGroup.Item>
                    <i className='fas fa-arrow-right'></i> One Pieces
                </ListGroup.Item>
            </Link>
            <Link to='/category/series/titan'>
                <ListGroup.Item>
                    <i className='fas fa-arrow-right'></i> Attack On Titan
                </ListGroup.Item>
            </Link>
        </ListGroup>
        <hr />
        <ListGroup className='category'>
            <strong>Brand</strong>
            <Link to='/category/brand/kotobukiya'>
                <ListGroup.Item>
                    <i className='fas fa-arrow-right'></i> Kotobukiya
                </ListGroup.Item>
            </Link>
            <Link to='/category/brand/bandai'>
                <ListGroup.Item>
                    <i className='fas fa-arrow-right'></i> Bandai 
                </ListGroup.Item>
            </Link>
            <Link to='/category/brand/max'>
                <ListGroup.Item>
                    <i className='fas fa-arrow-right'></i> Max Factory
                </ListGroup.Item>
            </Link>
            <Link to='/category/brand/aniplex'>
                <ListGroup.Item>
                    <i className='fas fa-arrow-right'></i> Aniplex
                </ListGroup.Item>
            </Link>
            <Link to='/category/brand/smile'>
                <ListGroup.Item>
                    <i className='fas fa-arrow-right'></i> Good Smile 
                </ListGroup.Item>
            </Link>
            <Link to='/category/brand/alter'>
                <ListGroup.Item>
                    <i className='fas fa-arrow-right'></i> Alter
                </ListGroup.Item>
            </Link>
            <Link to='/category/brand/ryu'>
                <ListGroup.Item>
                    <i className='fas fa-arrow-right'></i> Cloud Studio
                </ListGroup.Item>
            </Link>
        </ListGroup>
        <hr />
        <ListGroup className='category'>
            <strong>Price </strong>
            <Link to='/category/price/0/to/50'>
                <ListGroup.Item>
                    <i className='fas fa-arrow-right'></i> 0 to $50
                </ListGroup.Item>
            </Link>
            <Link to='/category/price/50/to/100'>
                <ListGroup.Item>
                    <i className='fas fa-arrow-right'></i> $50 to $100
                </ListGroup.Item>
            </Link>
            <Link to='/category/price/100/to/200'>
                <ListGroup.Item>
                    <i className='fas fa-arrow-right'></i> $100 to $200
                </ListGroup.Item>
            </Link>
            <Link to='/category/price/200/to/500'>
                <ListGroup.Item>
                    <i className='fas fa-arrow-right'></i> $200 to $500
                </ListGroup.Item>
            </Link>
            <Link to='/category/price/500/to/1000'>
                <ListGroup.Item>
                    <i className='fas fa-arrow-right'></i> $500 to $1000
                </ListGroup.Item>
            </Link>
        </ListGroup>
        </>
    )
}

export default Sidebar