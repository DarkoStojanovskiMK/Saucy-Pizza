import express from 'express'
const router = express.Router()
import {getPizzas, getSinglePizza} from '../controllers/pizzaController.js'


router.route('/').get(getPizzas)
router.route('/:id').get(getSinglePizza)

export default router