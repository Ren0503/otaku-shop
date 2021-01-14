import * as types from '../constants/blogConstants'

export const blogListReducer = (state = { blogs: []}, action) => {
    switch(action.type) {
        case types.BLOG_LIST_REQUEST:
            return { loading: true, blogs: [] }
        case types.BLOG_LIST_SUCCESS:
            return{
                loading: false,
                blogs: action.payload.blogs,
                pages: action.payload.pages,
                page: action.payload.page,
            }
        case types.BLOG_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const blogDetailReducer = (
    state = { blog : {} },
    action
) => {
    switch(action.type) {
        case types.BLOG_DETAILS_REQUEST:
            return { ...state, loading: true }
        case types.BLOG_DETAILS_SUCCESS:
            return { loading: false, blog: action.blog}
        case types.BLOG_DETAILS_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

export const blogDeleteReducer = (state = {}, action) => {
    switch(action.type) {
        case types.BLOG_DELETE_REQUEST:
            return { loading: true }
        case types.BLOG_DELETE_SUCCESS:
            return { loading: false, success: true}
        case types.BLOG_DELETE_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

export const blogCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case types.BLOG_CREATE_REQUEST:
            return { loading: true}
        case types.BLOG_CREATE_SUCCESS:
            return { loading: false, success: true, blog: action.payload}
        case types.BLOG_CREATE_FAIL:
            return { loading: false, error: action.payload}
        case types.BLOG_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const blogUpdateReducer = (state = { blog: {}}, action) => {
    switch(action.type) {
        case types.BLOG_UPDATE_REQUEST:
            return { loading: true }
        case types.BLOG_UPDATE_SUCCESS:
            return { loading: false, success: true, blog: action.payload }
        case types.BLOG_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case types.BLOG_UPDATE_RESET:
            return { blog: {} }
        default:
            return state
    }
}