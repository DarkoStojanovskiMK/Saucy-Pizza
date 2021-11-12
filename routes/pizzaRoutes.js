import express from 'express'
const router = express.Router()
import {getPizzas} from '../controllers/pizzaController.js'


router.route('/').get(getPizzas)

export default router