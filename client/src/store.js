import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { cartBasketReducer } from './reducers/cartReducers'
import { allPizzasReducer, singlePizzaReducer } from './reducers/pizzaReducers'
import { userDetailsReducer, userLoginReducer, userUpdateProfileReducer, userRegisterReducer, userListReducer, userDeleteReducer, userUpdateReducer, userByIdReducer } from './reducers/userReducers'
import { orderByIdReducer, orderCreateReducer } from './reducers/orderReducer'

const reducer = combineReducers({
    allPizzas:allPizzasReducer,
    singlePizza:singlePizzaReducer,
    cartBasket:cartBasketReducer,
    userLogin:userLoginReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    userRegister:userRegisterReducer,
    userList:userListReducer,
    userDelete:userDeleteReducer,
    userById:userByIdReducer,
    userUpdate:userUpdateReducer,
    orderCreate:orderCreateReducer,
    orderById:orderByIdReducer
    

})
const localStorageUserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const localStorageCartBasketNum =localStorage.getItem('cartBasketNum') ? JSON.parse(localStorage.getItem('cartBasketNum')) : []
const initialState = {
    cartBasket:{cartBasketNum:localStorageCartBasketNum},
    userLogin:{userInfo:localStorageUserInfo}
}
const middleware = [thunk]

const store =createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))
    

export default store
