import express from 'express'
const router = express.Router()
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    createProductReview,
    getTopProducts,
    getProductByGenres,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


// Get All Products
router
    .route('/')
    .get(getProducts)
    .post(protect, admin, createProduct)

// Get Product By Genres
router
    .route('/genres')
    .get(getProductByGenres)

// Get Product Review
router
    .route('/:id/reviews')
    .post(protect, createProductReview)

// Get Top Product
router
    .get('/top', getTopProducts)

// Get Item Product
router
    .route('/:id')
    .get(getProductById)
    .put(protect, admin, updateProduct)
    .delete(protect, admin, deleteProduct)

export default router