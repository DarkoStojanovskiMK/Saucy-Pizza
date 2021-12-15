import {ADD_TO_CART, ADD_TO_CART_SCREEN, REMOVE_FROM_CART} from '../types/cartTypes'



export const cartBasketReducer = (state={cartBasketNum:[]}, action)=>{
    switch(action.type){
        
        case ADD_TO_CART:
            
            const existItem = state.cartBasketNum.find(x=>x.id===action.payload.id)
            if(existItem){
                console.log(state.cartBasketNum);
                
                return{
                    ...state,
                    
                    cartBasketNum: state.cartBasketNum.map(x=>x.id===existItem.id ? action.payload : x )
                }
            }else{
                localStorage.setItem('cartBasketNum', JSON.stringify([...state.cartBasketNum, action.payload]))
                
                return{
                    ...state,
                    
                    cartBasketNum: [...state.cartBasketNum, action.payload]
                }
            }
            case REMOVE_FROM_CART:

                localStorage.setItem('cartBasketNum', JSON.stringify(state.cartBasketNum.filter(x=>x.id!==action.payload)))
                return{
                    ...state,
                    cartBasketNum: state.cartBasketNum.filter(x=>x.id !==action.payload)
                }
          
       
            
        default:
            return state
    }
}

export const cartPizzasReducer = (state={}, action)=>{
    switch(action.type){
        case ADD_TO_CART_SCREEN:
            return {

            }
        default:
            return state
    }
}
