import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'



const createOrder = asyncHandler(async(req,res)=>{

    const {
        orderItems,
        shippingAddress,
        totalPrice
    } = req.body

    if(orderItems && orderItems.length === 0){
        throw new Error('No order items')
    }else{
        const order = new Order({
            user:req.user._id,
            orderItems,
            shippingAddress,
            totalPrice
        })

        const createdOrder = await order.save()
        res.json(createdOrder)
    }
})

const getOrders = asyncHandler(async(req,res)=>{

    const orders = await Order.find({})
    if(orders){
        res.json(orders)
    }else{
        res.status(404)
        throw new Error('Orders not found')
    }
})

export {getOrders, createOrder}