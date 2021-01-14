import mongoose from 'mongoose'

const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image : {
            type: String,
            required: true,
        },
        body : {
            type: String,
            required: true
        },
    },
    {
        timestamp: true,
    }
)

const Blog = mongoose.model('Blog', blogSchema)

export default Blog