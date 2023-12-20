import {createStore, combineReducers, applyMiddleware, } from 'redux';
//we can't add multiple reducer in store so we need combinereducer, In this we can add in Key value pairs
//we are adding dev tool extension so we can connect this file or project with redux extension
import { composeWithDevTools } from 'redux-devtools-extension'; 
//we are using the thunk middleware 
import {thunk} from 'redux-thunk';
import todosReducers from './todosReducer';
const reducer = combineReducers({
    todos:todosReducers,

}) 

const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
    )
    export default store;