import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc    Fetch all products
// @routes  Get  /api/products and GET /api/products?keyword=""&pageNumber=""
// @access public

const getProducts = asyncHandler(async (req, res) => {
    const pageSize = 9
    const page = Number(req.query.pageNumber) || 1

    const keyword = req.query.keyword
    ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i',
        },
    } : {}

    const count = await Product.countDocuments({...keyword})
    const products = await Product.find({...keyword})
        .limit(pageSize)
        .skip(pageSize * (page - 1))
        .sort({ createdAt: -1 })

    res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Get products by genres
// @routes  GET /api/products/genres?genre=""
// @access  public

const getProductByGenres = asyncHandler(async (req, res) => {
    const genre = req.query.genre
    ? {
        genres: {
            $regex: req.query.genre,
            $options: 'i',
        },
    } : {}

    const products = await Product.find({ ...genre }).sort({ createdAt: -1 })
    const countGenres = await Product.countDocuments({ ...genre })

    res.json({ products, countGenres })
})

// @desc Fetch products by series
// @routes GET /api/products/series?series=""
// @access public

const getProductsBySeries = asyncHandler(async (req, res) => {
    const series = req.query.series
    ? {
        series: {
            $regex: req.query.series,
            $options: 'i',
        },
    } : {}

    const products = await Product.find({...series})

    .sort({ createdAt: -1 })

    res.json({ products })

})

// @desc    fetch products by brand
// @routes  GET /api/products/brand?brand=""
// @access  Public

const getProductsByBrand = asyncHandler(async (req, res) => {
    const brand = req.query.brand
    ? {
        brand: {
            $regex: req.query.brand,
            $options: 'i',
        },
    } : {}
    
    const products = await Product.find({...brand}).sort({ createdAt: -1 })

    res.json({ products })
})

// @desc    Fetch Product by Price
// @routes  GET /api/product/price?bottom=""&up=""
// @access  Public

const getProductsByPrice = asyncHandler(async (req, res) => {
    const bottom = req.query.bottom
    const top = req.query.top

    const products = await Product.find({price: {$gte: bottom, $lte: top}})

    res.json({ products })
})

// @desc    fetch single product
// @routes  GET /api/products/:id
// @access  public

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

// @desc    Get product related 
// @routes  GET /api/products/:id/related
// @access  Public

const getProductRelated = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        const related = product.character
        ? {
            character: {
                $regex: product.character,
                $options: 'i',
            },
        } : {}
        
        const products = await Product.find({...related}).sort({ createdAt: -1 }).limit(5)
    
        res.json({ products })

    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

// @desc    delete a product
// @routes  DELETE /api/products/:id
// @access  private/admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        await product.remove()
        res.json({ message: 'Product removed'})
    } else {
        res.status(404)
        throw new Error('Product not found')    
    }
})

// @desc    create a product
// @routes  POST /api/products
// @access  private/admin
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        character: 'Sample character',
        size : '0',
        series : 'null',
        genres: 'action',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description',
    })

    const createProduct = await product.save()
    res.status(201).json(createProduct)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  private/admin
const updateProduct = asyncHandler(async (req, res) => {
    const {
        name,
        price,
        description,
        image,
        brand,
        character,
        size,
        series,
        genres,
        countInStock,
    } = req.body

    const product = await Product.findById(req.params.id)

    if(product) {
        product.name = name
        product.price = price
        product.description = description
        product.image = image
        product.brand = brand
        product.character = character
        product.size = size
        product.series = series
        product.genres = genres
        product.countInStock = countInStock

        const updateProduct = await product.save()
        res.json(updateProduct)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

// @desc    create ew review
// @routes  POST /api/products/:id/reviews
// @access  private
const createProductReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body

    const product = await Product.findById(req.params.id)

    if(product) {
        const alreadyReviewed = product.reviews.find(
            (r) => r.user.toString() === req.user._id.toString()
        )

        if(alreadyReviewed){
            res.status(400)
            throw new Error('Product already reviewed')
        }

        const review = {
            name: req.user.name,
            rating:  Number(rating),
            comment,
            user: req.user._id,
        }

        product.reviews.push(review)

        product.numReviews = product.reviews.length

        product.rating = 
            product.reviews.reduce((acc, item) => item.rating + acc, 0) /
            product.reviews.length

        await product.save()
        res.status(201).json({ message: 'Review added' })
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

// @desc    Get top rated products
// @routes  GET /api/products/top
// @access  public
const getTopProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({ rating: -1}).limit(6)

    res.json(products)
})

// @desc    Get limit products
// @routes  GET /api/products/limit
// @access  public
const getLimitProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({ countInStock: {$gte: 1} }).sort({ countInStock: 1}).limit(5)

    res.json(products)
})

export {
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
}