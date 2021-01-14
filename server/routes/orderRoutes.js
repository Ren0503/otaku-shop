import express from 'express'
const router = express.Router()
import {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getMyOrders,
    getOrders,
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

// Get all orders
router
    .route('/')
    .post(protect, addOrderItems)
    .get(protect, admin, getOrders)

// Get order by user
router
    .route('/my_orders')
    .get(protect, getMyOrders)

// Get order by id
router
    .route('/:id')
    .get(protect, getOrderById)

// Pay order
router
    .route('/:id/pay')
    .put(protect, updateOrderToPaid)

// Deliver order
router
    .route('/:id/deliver')
    .put(protect, admin, updateOrderToDelivered)

export default router