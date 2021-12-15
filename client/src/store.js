import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { cartBasketReducer } from './reducers/cartReducers'
import { allPizzasReducer, singlePizzaReducer } from './reducers/pizzaReducers'

const reducer = combineReducers({
    allPizzas:allPizzasReducer,
    singlePizza:singlePizzaReducer,
    cartBasket:cartBasketReducer

})
const localStorageCartBasketNum =localStorage.getItem('cartBasketNum') ? JSON.parse(localStorage.getItem('cartBasketNum')) : []
const initialState = {cartBasket:{cartBasketNum:localStorageCartBasketNum}}
const middleware = [thunk]

const store =createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))
    

export default store
