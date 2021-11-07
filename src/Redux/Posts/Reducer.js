

const initialPosts = []


const PostsReducer = (state = initialPosts, action) => {
    switch (action.type) {
        case 'FETCHING':
            return action.payload
        case 'CREATING':
            state = [action.payload, ...state]
            return state
        case 'UPDATING':
            state = state.map(post => post.id === action.payload.id ? action.payload : post)
            return state
        case 'DELETING':
            return state = state.filter(post => post.id !== action.payload)
        default: return state
    }
}

export default PostsReducer;