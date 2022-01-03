import mongoose from 'mongoose'
import connectDB from './config/db.js'
import Pizza from './models/pizzaModel.js'
import User from './models/userModel.js'
import Order from './models/orderModel.js'
import dotenv from 'dotenv'
import {pizzas} from './data/pizzas.js'
import users from './data/users.js'

dotenv.config()
connectDB()

const importData = async()=>{

    try {
        await Pizza.deleteMany()
        await User.deleteMany()
        await Order.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        const samplePizzas = pizzas.map(pizza=>{
            return {...pizza, user:adminUser}
        })

        await Pizza.insertMany(samplePizzas)

        console.log('Data Import Success')
        process.exit()
    } catch (error) {
        
        console.error('Error with data import')
        process.exit(1)
    }
}

importData()
