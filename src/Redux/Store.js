import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import PostsReducer from './Posts/Reducer'
import AuthReducer from './Auth/Reducer'
import thunk from 'redux-thunk'



const RootReducer = combineReducers({
    PostsReducer,
    AuthReducer
})

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;