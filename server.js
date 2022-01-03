import express from 'express'
import dotenv from'dotenv'
import connectDB from './config/db.js'
import pizzaRoutes from './routes/pizzaRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'


dotenv.config()
connectDB()
const app = express()



app.get('/', (req,res)=>{
    res.send('API is running...')
})

app.use(express.json({extended:false}))

app.use('/api/pizzas', pizzaRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)



app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}  `))