import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import { Blog } from '../../components/blogs'
import { Loader, Message, Paginate } from '../../components/services'

import { listBlogs } from '../../actions/blogActions'

const BlogGuideScreen = ({ match }) => {
    const pageNumber= match.params.pageNumber || 1

    const dispatch = useDispatch()
    const blogList = useSelector(state => state.blogList)
    const { loading, error, blogs, page, pages } = blogList

    useEffect(() => {
        dispatch(listBlogs(pageNumber))
    }, [dispatch, pageNumber])

    return (
        <>
            <h1>Guide For Beginners</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Row>
                        {blogs.map((blog) => (
                            <Col key={blog.id} sm={12} md={6} lg={4} xl={3}>
                                <Blog blog={blog} />
                            </Col>
                        ))}
                    </Row>
                    <Paginate
                        pages={pages}
                        page={page}
                    />
                </>
            )}
        </>
    )
}

export default BlogGuideScreen