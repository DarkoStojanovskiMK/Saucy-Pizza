import { ADD_TO_CART } from "../types/cartTypes"
import axios from 'axios'





export const addCartNumber = (pizzaId, num)=> async (dispatch, getState)=>{

    const item = await axios.get(`/api/pizzas/${pizzaId}`)
    const {data} = item
    dispatch({type:ADD_TO_CART, payload:{
        pizza:data._id,
        image:data.image,
        price:data.price,
        ingredients:data.ingredients,
        dough:data.dough,
        name:data.name,
        num
    }})

    localStorage.setItem('cartBasketNum', JSON.stringify(getState().cartBasket.cartBasketNum))
    
    
}

