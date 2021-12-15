import express from 'express'
const router = express.Router()
import { authUser, getUserProfile, registerUser } from '../controllers/userControllers'
import {protect} from '../middleware/authMiddleware'


router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/profile').get(protect,getUserProfile)



export default router