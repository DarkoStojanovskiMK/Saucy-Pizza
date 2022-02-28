import express from 'express'
import {protect, admin} from '../middleware/authMiddleware.js'
const router = express.Router()
import {getOrders, createOrder, getOrderById} from '../controllers/orderController.js'



router.route('/').get(protect,admin,getOrders).post(protect,createOrder)
router.route('/:id').get(protect, getOrderById)



export default router