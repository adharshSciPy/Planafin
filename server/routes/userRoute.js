import { Router } from 'express'
import { registerUser, loginUser } from "../controller/userController.js"
const userRoute = Router()


userRoute.route('/register').post(registerUser)
userRoute.route('/login').post(loginUser)



export default userRoute