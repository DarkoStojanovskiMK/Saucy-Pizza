import Pizza from '../models/pizzaModel.js'




export const getPizzas = async (req,res)=>{
    const pizzas = await Pizza.find({})
    res.json(pizzas)
}