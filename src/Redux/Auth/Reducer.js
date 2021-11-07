const user = {}

const AuthReducer = (state = user, action) => {
    switch (action.type) {
        case 'LOGIN':
            return state = action.payload
        case 'SIGNUP':
            return state = action.payload
        case 'LOGOUT':
            return state = action.payload
        default: return state
    }
}

export default AuthReducer;