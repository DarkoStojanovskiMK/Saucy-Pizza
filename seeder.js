import mongoose from 'mongoose'
import connectDB from './config/db.js'
import Pizza from './models/pizzaModel.js'
import User from './models/userModel.js'
import dotenv from 'dotenv'
import {pizzas} from './data/pizzas.js'
import users from './data/users.js'

dotenv.config()
connectDB()

const importData = async()=>{

    try {
        await Pizza.deleteMany()
        await Pizza.insertMany(pizzas)
        console.log('Data Import Success')
        process.exit()
    } catch (error) {
        console.log(error);
        
        console.error('Error with data import')
        process.exit(1)
    }
}

importData()
