import Pizza from '../models/pizzaModel.js'
import asyncHandler from 'express-async-handler'




export const getPizzas = async (req,res)=>{
    const pizzas = await Pizza.find({})
    res.json(pizzas)
}

export const getSinglePizza = asyncHandler(async (req,res)=>{
    const pizza = await Pizza.findById(req.params.id)
    
        if(pizza){
            res.json(pizza)
        }else{
            res.status(404)
            throw new Error('Pizza not found')
        }
     
       
})