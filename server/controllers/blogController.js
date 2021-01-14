import asyncHandler from 'express-async-handler'
import Blog from '../models/blogModel.js'

// @desc    Fetch all blogs
// @routes  GET /api/blogs
// @actress public

const getBlogs = asyncHandler(async (req, res) => {
    const pageSize = 6
    const page = Number(req.query.pageNumber) || 1

    const count = await Blog.countDocuments({})
    const blogs = await Blog.find({})
        .limit(pageSize)
        .skip(pageSize * (page - 1))

    res.json({ blogs, page, pages: Math.ceil(count / pageSize)})
})

// @desc    Fetch single blog
// @routes  GET /api/blogs/:id
// @access  public

const getBlogById = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)

    if(blog){
        res.json(blog)
    } else {
        res.status(404)
        throw new Error('Blog not found')
    }
})

// @desc    create a blog
// @routes  POST /api/blogs
// @access  private/admin

const createBlog = asyncHandler(async (req, res) => {
    const blog = new Blog({
        title : 'Sample Title',
        description: 'Description',
        image: 'images/blog',
        body : 'Sample Body',
    })

    const createBlog = await blog.save()
    res.status(201).json(createBlog)
})

// @desc    Update a blog
// @routes  PUT /api/blogs/:id
// @access  private/admin

const updateBlog = asyncHandler(async (req, res) => {
    const {
        title,
        description,
        image,
        body,
    } = req.body

    const blog = await Blog.findById(req.params.id)

    if(blog) {
        blog.title = title
        blog.description = description
        blog.image = image
        blog.body = body

        const updateBlog = await blog.save()
        res.json(updateBlog)
    } else {
        res.status(404)
        throw new Error('Blog not found')      
    }
})


// @desc    delete a blog
// @routes  DELETE /api/blogs/:id
// @access  private/admin
const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)

    if(blog) {
        await blog.remove()
        res.json({ message: 'Blog removed'})
    } else {
        res.status(404)
        throw new Error('Blog not found')    
    }
})

export {
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
}