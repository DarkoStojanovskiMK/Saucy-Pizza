import { 
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_FAIL,
    ORDER_CREATE_RESET,
    ORDER_GET_BY_ID_REQUEST,
    ORDER_GET_BY_ID_SUCCESS,
    ORDER_GET_BY_ID_FAIL
 } from '../types/orderTypes'


export const orderCreateReducer = (state={},action)=>{
    switch(action.type){
        case ORDER_CREATE_REQUEST:
            return {
                ...state,
                loading:true
            }
        case ORDER_CREATE_SUCCESS:
            return{
                loading:false,
                order:action.payload,
                success:true
            }
        case ORDER_CREATE_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case ORDER_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const orderByIdReducer = (state={loading: true, orderItems:[], shippingAddress:{}}, action)=>{
    switch(action.type){
        case ORDER_GET_BY_ID_REQUEST:
            return{
                ...state,
                loading:true
            }
        case ORDER_GET_BY_ID_SUCCESS:
            return{
                loading:false,
                order:action.payload,
            }
        case ORDER_GET_BY_ID_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}