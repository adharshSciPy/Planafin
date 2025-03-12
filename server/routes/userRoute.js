import { Router } from 'express'
import { registerUser, loginUser, ContactUs, ContactDetails } from "../controller/userController.js"
const userRoute = Router()


userRoute.route('/register').post(registerUser)
userRoute.route('/login').post(loginUser)
userRoute.route('/contactus').post(ContactUs)
userRoute.route('/contactdetails').get(ContactDetails)



export default userRoute