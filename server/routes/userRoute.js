import { Router } from 'express'
import upload from '../utils/uploads.js'
import { registerUser, loginUser, ContactUs, ContactDetails, jobOpenings, jobListing, addFeedback, viewFeedback, jobApplication, applicationDetails, onDemand, demandDetails, getOnDemandById } from "../controller/userController.js"
const userRoute = Router()


userRoute.route('/register').post(registerUser)
userRoute.route('/login').post(loginUser)
userRoute.route('/contactus').post(ContactUs)
userRoute.route('/contactdetails').get(ContactDetails)
userRoute.route('/jobopenings').post(jobOpenings)
userRoute.route('/joblisting').get(jobListing)
userRoute.route('/addFeedback').post(upload.single('image'), addFeedback)
userRoute.route('/viewFeedback').get(viewFeedback)
userRoute.route('/jobApplication').post(upload.single('resume'), jobApplication)
userRoute.route('/applicationDetails').get(applicationDetails)
userRoute.route('/onDemand').post(upload.single('image'), onDemand)
userRoute.route('/demandDetails').get(demandDetails)
userRoute.route('/demandCardDetails/:id').get(getOnDemandById)





export default userRoute