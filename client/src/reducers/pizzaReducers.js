import {
    GET_PIZZAS_REQUEST,
    GET_PIZZAS_SUCCESS,
    GET_PIZZAS_FAIL,
    GET_SINGLE_PIZZA_FAIL,
    GET_SINGLE_PIZZA_REQUEST,
    GET_SINGLE_PIZZA_SUCCESS
} from '../types/pizzaTypes'

export const allPizzasReducer = (state={pizzas:[]}, action)=>{
    switch(action.type){
        case GET_PIZZAS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case GET_PIZZAS_SUCCESS:
            return {
                loading:false,
                pizzas:action.payload
            }
        case GET_PIZZAS_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}

export const singlePizzaReducer = (state={pizza:{}}, action)=>{
    switch(action.type){
        case GET_SINGLE_PIZZA_REQUEST:
            return {
                
                loading:true,
                ...state
            }
        case GET_SINGLE_PIZZA_SUCCESS:
            return {
                loading:false,
                pizza:action.payload
            }
        case GET_SINGLE_PIZZA_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}