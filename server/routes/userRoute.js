import { Router } from 'express'
import upload from '../utils/uploads.js'
import {
    registerUser, loginUser, ContactUs, ContactDetails, jobOpenings, jobListing, addFeedback, viewFeedback, jobApplication, applicationDetails, onDemand, demandDetails, getOnDemandById, addJourney, journeyDetails, addWatchnow, watchNowDetails, profileImage,
    deleteDemand, deleteJourney, deleteFeedback, deleteProfileImage, customerImage, deleteCustomerImage, deleteJobopenings,
    deleteApplication, ContactById, getemployeeData, employeeDetails, customerDetails, watchnowDelete, projectUpdate, viewProject,
    solution, solutionDetails, solutionById, deleteSolution, industryImage, industryDetails, deleteIndustry, addAccelerationSolutions, deleteAccelerationSolutions, getAccelerationSolutions, addSolutionCounters, getSolutionCounters, updateSolutionCounters, deleteSolutionCounters,
    addBusinessPlanning, getBusinessPlanning, deleteBusinessPlanning, createOurservice, addPlanafinConsultations, getPlanafinConsultations, deletePlanafinConsultations, serviceDetails, servicedata, deleteservice

} from "../controller/userController.js"
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
userRoute.route('/addjourney').post(addJourney)
userRoute.route('/journeyDetails').get(journeyDetails)
userRoute.route('/addWatchnow').post(addWatchnow)
userRoute.route('/watchnowDetails').get(watchNowDetails)
userRoute.route('/employeeImage').post(upload.array('profileImg'), profileImage)
userRoute.route('/deleteDemand/:id').delete(deleteDemand)
userRoute.route('/deleteJourney/:id').delete(deleteJourney)
userRoute.route('/deleteFeedback/:id').delete(deleteFeedback)
userRoute.route('/deleteProfileImage').delete(deleteProfileImage)
userRoute.route('/customerImage').post(upload.array('imageCustomer'), customerImage)
userRoute.route('/deleteCustomerImage').delete(deleteCustomerImage)
userRoute.route('/deleteJobopening/:id').delete(deleteJobopenings)
userRoute.route('/deleteJobapplication/:id').delete(deleteApplication)
userRoute.route('/contactIndetail/:id').get(ContactById)
userRoute.route('/getemployeeData/:id').get(getemployeeData)
userRoute.route('/employeeDetails').get(employeeDetails)
userRoute.route('/customerDetails').get(customerDetails)
userRoute.route("/deleteWatchnow/:id").delete(watchnowDelete)
userRoute.route("/projectUpdate").post(projectUpdate)
userRoute.route("/viewProject").get(viewProject)
userRoute.route("/solution").post(solution)
userRoute.route("/solutionDetails").get(solutionDetails)
userRoute.route("/solutions/:id").get(solutionById)
userRoute.route("/deleteSolution/:id").delete(deleteSolution)
userRoute.route('/industryImage').post(upload.array('industryImage'), industryImage)
userRoute.route('/industryDetails').get(industryDetails)
userRoute.route('/deleteIndustry').delete(deleteIndustry)
userRoute.route("/addSolutionAccelerators").post(addAccelerationSolutions)
userRoute.route("/getSolutionAccelerators").get(getAccelerationSolutions);
userRoute.route("/deleteSolutionAccelerators/:id").delete(deleteAccelerationSolutions)
userRoute.route("/addSolutionCounter").post(addSolutionCounters);
userRoute.route("/getSolutionCounter").get(getSolutionCounters);
userRoute.route("/updateSolutionCounter/:id").put(updateSolutionCounters);
userRoute.route("/deleteSolutionCounter/:id").delete(deleteSolutionCounters);
userRoute.route("/addBusinessPlanning").post(upload.single('businessPlanningImage'), addBusinessPlanning);
userRoute.route("/getBusinessPlanning").get(getBusinessPlanning);
userRoute.route("/deleteBusinessPlanning/:id").delete(deleteBusinessPlanning);
userRoute.route("/addPlanafinConsultation").post(addPlanafinConsultations);
userRoute.route("/getPlanafinConsultation").get(getPlanafinConsultations);
userRoute.route("/deletePlanafinConsultation/:id").delete(deletePlanafinConsultations);
userRoute.route("/createourservice").post(upload.single('image'), createOurservice);
userRoute.route("/servicedetails").get(serviceDetails);
userRoute.route("/serviceById/:id").get(servicedata)
userRoute.route("/deleteService/:id").delete(deleteservice)





export default userRoute