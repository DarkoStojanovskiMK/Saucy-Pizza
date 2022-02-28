import {
    GET_PIZZAS_REQUEST,
    GET_PIZZAS_SUCCESS,
    GET_PIZZAS_FAIL,
    GET_SINGLE_PIZZA_REQUEST,
    GET_SINGLE_PIZZA_SUCCESS,
    GET_SINGLE_PIZZA_FAIL
} from '../types/pizzaTypes'
import axios from 'axios'

export const getAllPizzas = ()=> async(dispatch)=>{

    try {
        dispatch({type:GET_PIZZAS_REQUEST})
        
        const {data} = await axios.get('/api/pizzas')
        
        dispatch({type:GET_PIZZAS_SUCCESS, payload:data})
    } catch (error) {
        console.log(error);
        
        dispatch({type:GET_PIZZAS_FAIL, payload:error})
        
    }
}

export const getSinglePizza = (id)=> async(dispatch)=>{

    try {
        
        
        dispatch({type:GET_SINGLE_PIZZA_REQUEST})

        const {data} = await axios.get(`/api/pizzas/${id}` )
        
        console.log(data)
         dispatch({type:GET_SINGLE_PIZZA_SUCCESS, payload:data})
    } catch (error) { 
        console.log(error.response)  
        dispatch({
            type:GET_SINGLE_PIZZA_FAIL, 
            payload:
            error.response && error.response.data.message ?
                error.response.data.message :
                error.message})
        
    }

   
}