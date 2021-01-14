import express from 'express'
const router = express.Router()
import { 
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
} from '../controllers/blogController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

// Get all Blogs
router
    .route('/')
    .get(getBlogs)
    .post(protect, admin, createBlog)

// Get blog by id
router
    .route('/:id')
    .get(getBlogById)
    .put(protect, admin, updateBlog)
    .delete(protect, admin, deleteBlog)

export default router