import express from 'express'
const router = express.Router()
import {
    getProducts,
    getProductById,
    getProductRelated,
    createProduct,
    updateProduct,
    deleteProduct,
    createProductReview,
    getTopProducts,
    getProductByGenres,
    getProductsBySeries,
    getProductsByBrand,
    getProductsByPrice,
    getLimitProducts,
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

// Get Product By Series
router
    .route('/series')
    .get(getProductsBySeries)

// Get Product by Brand
router
    .route('/brand')
    .get(getProductsByBrand)

// Get Product by Price
router
    .route('/price')
    .get(getProductsByPrice)

// Get Product Review
router
    .route('/:id/reviews')
    .post(protect, createProductReview)

// Get Product Related
router
    .route('/:id/related')
    .get(getProductRelated)

// Get Top Product
router
    .get('/top', getTopProducts)

// Get Limit Product
router
    .get('/limit', getLimitProducts)

// Get Item Product
router
    .route('/:id')
    .get(getProductById)
    .put(protect, admin, updateProduct)
    .delete(protect, admin, deleteProduct)

export default router