import express from 'express'
const router = express.Router()
import {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


// Login User
router.post('/login', authUser)

// Register User
router
    .route('/')
    .post(registerUser)
    .get(protect, admin, getUsers)

// Get Profile
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

// Get By Id
router
    .route('/:id')
    .get(protect, admin,getUserById)
    .put(protect, admin, updateUser)
    .delete(protect, admin, deleteUser)

export default router