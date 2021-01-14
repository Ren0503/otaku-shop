import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'

import { Meta, Loader, Message } from '../../components/services'

import { detailBlog } from '../../actions/blogActions'

const BlogDetailScreen = ({ history, match }) => {
    const dispatch = useDispatch()

    const blogDetail = useSelector(state => state.blogDetail)
    const { loading, error, blog } = blogDetail

    useEffect(() => {
        if(!blog._id || blog._id !== match.params.id){
            dispatch(detailBlog(match.params.id))
        }
    }, [dispatch, match])

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
                    <Meta title={blog.title} />
                    <Row>
                        <Col md={9}>
                            <Image src={blog.image} atl={blog.title} fluid />
                        </Col>
                    </Row>
                </>
            )}
        </>
    )    
}

export default BlogDetailScreen