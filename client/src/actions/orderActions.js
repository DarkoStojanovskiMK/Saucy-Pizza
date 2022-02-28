import axios from 'axios'
import { 
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_FAIL,
    ORDER_CREATE_RESET, 
    ORDER_GET_BY_ID_REQUEST,
    ORDER_GET_BY_ID_SUCCESS, 
    ORDER_GET_BY_ID_FAIL 
} from '../types/orderTypes'

export const createOrder = (order)=>async (dispatch, getState)=>{

    try {
        dispatch({type:ORDER_CREATE_REQUEST})
        console.log(order);
        

        const {userLogin:{userInfo}}=getState()
        const config={
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.post('/api/orders', order,config)
        dispatch({type:ORDER_CREATE_SUCCESS, payload:data})
        dispatch({type:ORDER_CREATE_RESET})
    } catch (error) {
        dispatch({
            type:ORDER_CREATE_FAIL, 
            payload:
            error.response && error.response.data.message ?
            error.response.data.message :
            error.message })
    }
}


export const getOrderById = (id)=>async(dispatch, getState)=>{
    try {
        dispatch({type:ORDER_GET_BY_ID_REQUEST})

        const {userLogin:{userInfo}}=getState()
        const config = {
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get(`/api/orders/${id}`, config)
        dispatch({type:ORDER_GET_BY_ID_SUCCESS, payload:data})
    } catch (error) {
        dispatch({
            type:ORDER_GET_BY_ID_FAIL,
            payload:
            error.response && error.response.data.message ? 
            error.response.data.message :
            error.message})
    }
    

}
