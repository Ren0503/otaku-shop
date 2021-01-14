import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { Loader, Message, FormContainer } from '../../components/services'

import { detailBlog, updateBlog } from '../../actions/blogActions'

import { BLOG_UPDATE_RESET } from '../../constants/blogConstants'

const BlogEditScreen = ({ match, history }) => {
    const blogId = match.params.id

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [body, setBody] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const blogDetail = useSelector(state => state.blogDetail)
    const { loading, error, blog } = blogDetail

    const blogUpdate = useSelector(state => state.blogUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = blogUpdate

    useEffect(() => {
        if(successUpdate) {
            dispatch({ type: BLOG_UPDATE_RESET })
            history.push('/admin/blog_list')
        } else {
            if(!blog.title || blog._id !== blogId) {
                dispatch(detailBlog(blogId))
            } else {
                setTitle(blog.title)
                setDescription(blog.description)
                setImage(blog.image)
                setBody(blog.body)
            }
        }
    }, [dispatch, history, blogId, blog, successUpdate])    

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }

            const { data } = await axios.post('/api/upload', formData, config)

            setImage(data)
            setUploading(false)
        } catch(error) {
            console.error(error)
            setUploading(false)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            updateBlog({
                _id: blogId,
                title,
                description,
                image,
                body,
            })
        )
    }

    return (
        <>
            <Link to='/admin/blog_list' className='btn btn-light my-3'>
                Go back
            </Link>
            <FormContainer>
            <h1>Edit Product</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                {loading ? (
                <Loader />
                ) : error ? (
                <Message variant='danger'>{error}</Message>
                ) : (
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type='title'
                                placeholder='Enter title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}                            
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='description'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}                            
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='image'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter image url'
                                value={image}
                                onChange={(e) => setImage(e.target.value)}                            
                            ></Form.Control>
                            <Form.File
                                id='image-file'
                                label='Choose File'
                                custom
                                onChange={uploadFileHandler}
                            ></Form.File>
                                {uploading && <Loader />}
                        </Form.Group>

                        <Form.Group controlId='body'>
                            <Form.Label>Body</Form.Label>
                            <Form.Control
                                as='textarea'
                                placeholder='Enter body'
                                value={body}
                                onChange={(e) => setBody(e.target.value)}                            
                            ></Form.Control>
                        </Form.Group>

                        <Button type='submit' variant='primary'>
                            Update
                        </Button>
                    </Form>
                )}
            </FormContainer>
        </>
    )
}

export default BlogEditScreen