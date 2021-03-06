import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { Loader, Message, FormContainer } from '../../components/shared'

import { listProductDetails, updateProduct } from '../../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../../constants/productConstants'

const ProductEditScreen = ({ match, history }) => {
    const productId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [character, setCharacter] = useState('')
    const [size, setSize] = useState('')
    const [series, setSeries] = useState('')
    const [genres, setGenres] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description , setDescription] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const{ loading: loadingUpdate, error: errorUpdate, success: successUpdate} = productUpdate

    useEffect(() => {
        if(successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })
            history.push('/admin/product_list')
        } else {
            if (!product.name || product._id !== productId) {
                dispatch(listProductDetails(productId))
            } else {
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setBrand(product.brand)
                setCharacter(product.character)
                setSize(product.size)
                setSeries(product.series)
                setGenres(product.genres)
                setCountInStock(product.countInStock)
                setDescription(product.description)
            }
        }
    }, [dispatch, history, productId, product, successUpdate])

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
            updateProduct({
                _id: productId,
                name,
                price,
                image,
                brand,
                character,
                size,
                series,
                genres,
                description,
                countInStock,
            })
        )
    }

    return (
        <>
            <Link to='/admin/product_list' className='btn btn-light my-3'>
                <i className='fas fa-arrow-left'></i> Go Back
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
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}                            
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='price'>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Enter price'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}                            
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

                        <Form.Group controlId='brand'>
                            <Form.Label>Brand</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter brand'
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}                            
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='countInStock'>
                            <Form.Label>Count In Stock</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Enter count in Stock'
                                value={countInStock}
                                onChange={(e) => setCountInStock(e.target.value)}                            
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='character'>
                            <Form.Label>Character</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter character'
                                value={character}
                                onChange={(e) => setCharacter(e.target.value)}                            
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='size'>
                            <Form.Label>Size</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter size'
                                value={size}
                                onChange={(e) => setSize(e.target.value)}                            
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='series'>
                            <Form.Label>Series</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter series'
                                value={series}
                                onChange={(e) => setSeries(e.target.value)}                            
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="genres">
                            <Form.Label>Genres</Form.Label>
                            <Form.Control 
                                as="select" 
                                value={genres}
                                onChange={(e) => setGenres(e.target.value)}                            
                            >
                                <option value="chibi">Chibi</option>
                                <option value="action">Action</option>
                                <option value="scale">Scale</option>
                                <option value="book">Artbook</option>
                            </Form.Control>
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

                        <Button type='submit' variant='primary'>
                            Update
                        </Button>
                    </Form>
                )}
            </FormContainer>
        </>
    )
}

export default ProductEditScreen