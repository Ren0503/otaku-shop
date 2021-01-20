import axios from 'axios'
import * as types from '../constants/productConstants'
import { logout } from './userActions'

export const listProducts = (keyword = '', pageNumber = '') => async (dispatch) => {
    try {
        dispatch({ type: types.PRODUCT_LIST_REQUEST})

        const { data } = await axios.get(
            `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
        )

        dispatch({
            type: types.PRODUCT_LIST_SUCCESS,
            payload: data,
        })
    } catch(error) {
        dispatch({
            type: types.PRODUCT_LIST_FAIL,
            payload :
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listProductsSeries = (series) => async(dispatch) => {
    try {
        dispatch({ type: types.PRODUCT_SERIES_REQUEST })

        const { data } = await axios.get(
            `/api/products/series?series=${series}`
        )

        dispatch({
            type: types.PRODUCT_SERIES_SUCCESS,
            payload: data,
        })
    } catch(error) {
        dispatch({
            type: types.PRODUCT_SERIES_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listProductsGenres = (genres, pageNumber = '') => async (dispatch) => {
    try {
        dispatch({ type: types.PRODUCT_GENRES_REQUEST })

        const { data } = await axios.get(
            `/api/products/genres?genre=${genres}&pageNumber=${pageNumber}`
        )

        dispatch({
            type: types.PRODUCT_GENRES_SUCCESS,
            payload: data,
        })
    } catch(error) {
        dispatch({
            type: types.PRODUCT_GENRES_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: types.PRODUCT_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: types.PRODUCT_DETAILS_SUCCESS,
            payload: data,
        })
    } catch(error) {
        dispatch({
            type: types.PRODUCT_DETAILS_FAIL,
            payload :
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const deleteProduct = (id) => async(dispatch, getState) => {
    try {
        dispatch({type: types.PRODUCT_DELETE_REQUEST})

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/api/products/${id}`, config)

        dispatch({
            type: types.PRODUCT_DELETE_SUCCESS
        })
    } catch(error) {
        const message  =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message

        if (message === 'Not authorized, token failed'){
            dispatch(logout())
        }

        dispatch({
            type: types.PRODUCT_DELETE_FAIL,
            payload: message
        })
    }
}

export const createProduct = () => async(dispatch, getState) => {
    try {
        dispatch({type: types.PRODUCT_CREATE_REQUEST})

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`/api/products`, {}, config)

        dispatch({
            type: types.PRODUCT_CREATE_SUCCESS,
            payload: data,
        })
    } catch(error) {
        const message  =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message

        if (message === 'Not authorized, token failed'){
            dispatch(logout())
        }

        dispatch({
            type: types.PRODUCT_CREATE_FAIL,
            payload: message
        })
    }
}

export const updateProduct = (product) => async(dispatch, getState) => {
    try {
        dispatch({type: types.PRODUCT_UPDATE_REQUEST})

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.put(`
            /api/products/${product._id}`,
            product,
            config
        )

        dispatch({
            type: types.PRODUCT_UPDATE_SUCCESS,
            payload: data,
        })
    } catch(error) {
        const message  =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message

        if (message === 'Not authorized, token failed'){
            dispatch(logout())
        }

        dispatch({
            type: types.PRODUCT_UPDATE_FAIL,
            payload: message
        })
    }
}

export const createProductReview = (productId, review) => async (dispatch, getState) => {
    try {
        dispatch({ type: types.PRODUCT_CREATE_REVIEW_REQUEST})

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.post(`/api/products/${productId}/reviews`, review, config)

        dispatch({
            type: types.PRODUCT_CREATE_REVIEW_SUCCESS,
        })
    } catch(error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: types.PRODUCT_CREATE_REVIEW_FAIL,
            payload: message,
        })
    }
}

export const listTopProducts = () => async (dispatch) => {
    try {
        dispatch({ type: types.PRODUCT_TOP_REQUEST})

        const { data } = await axios.get(`/api/products/top`)

        dispatch({
            type: types.PRODUCT_TOP_SUCCESS,
            payload: data,
        })
    } catch(error) {
        dispatch({
            type: types.PRODUCT_TOP_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}