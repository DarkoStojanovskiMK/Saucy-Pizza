import express from 'express'
import {protect, admin} from '../middleware/authMiddleware.js'
const router = express.Router()
import {getOrders, createOrder} from '../controllers/orderController.js'



router.route('/').get(protect,admin,getOrders).post(protect,createOrder)



export default router