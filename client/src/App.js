import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Resources from "./pages/Resources/Resources";
import Webinar from "./pages/WebinarComponent/Webinarsub";
import Aboutus from "./pages/Aboutus/Aboutus";
import Demandforecasting from "./pages/WebinarComponent/Demandforecasting";
import Budgeting from "./pages/WebinarComponent/Budgeting";
import Targetsetting from "./pages/WebinarComponent/Targetsetting";
import Career from "./pages/Career/Career";
import Solutions from "./pages/Solutions/Solutions";
import ContactUs from "./pages/ContactUs/ContactUs";
import SupplyChain from "./pages/SolutionComponent/SupplyChain";
import WebinarData from "./pages/Admin/WebinarData";
import Consultation from "./pages/Consultaion/Consultation";
import Ourjourneyadmin from "./pages/Admin/OurJourney";
import GetAllJourney from "./pages/Admin/OurJourneyAll";
import GetWebinarData from "./pages/Admin/WebinarFullDetails";
import FeedBack from "./pages/Admin/FeedBack";
import JobOpening from "./pages/Admin/JobOpening";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import JobDetails from "./pages/Admin/JobDetails";
import ApplicationDetails from "./pages/Admin/ApplicationDetails";
import EmployeeImage from "./pages/Admin/Employee Image/EmployeeImage";
import EmployeeData from "./pages/Admin/EmployeeData";
import AdContact from "./pages/Admin/AdContact";
import EmployeeList from "./pages/Admin/ClientImage/Clientimage";
import AdminReg from "./pages/Admin/AdminReg";
import Adminlogin from "./pages/Admin/Adminlogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
import WatchNowDetails from "./pages/Admin/WatchNowDetails";
import ProjectDetails from "./pages/Admin/Project.jsx";
import OurJourneyAccelarators from "./pages/Admin/OurJourneyAccelarators.jsx";
import OurJourneyAccelaratorsAll from "./pages/Admin/OurJourneyAccelaratorsAll.jsx";
import OurSolution from "./pages/Admin/OurSolution.jsx";
import SolutionDataFull from "./pages/Admin/SolutionDataFull.jsx";
import IndustryImages from "./pages/Admin/IndustryImages.jsx";
import Solutioncounter from "./pages/Admin/Solutioncounter.jsx";
import OurService from "./pages/Admin/OurServicePage/OurService.jsx";
import IndustryImageList from "./pages/Admin/IndustryImageList.jsx";
import AnaplanCounter from "./pages/Admin/Anaplan Counter/AnaplanCounter.jsx";
import TechPartners from "./pages/Admin/Technology Partners/TechPartners.jsx";
import PlanafinConsulting from "./pages/Admin/PlanafinConsulting.jsx";
import PlanafinConsultingAll from "./pages/Admin/PlanafinConsultingAll.jsx";
import UpDataAll from "./pages/Admin/UpDataAll.jsx";
import UpWebdata from "./pages/Admin/UpWebdata.jsx";
import UpCommingWebinar from "./pages/WebinarComponent/UpCommingWebinar.jsx";
import ResetPassword from "./pages/Admin/ResetPassword/ResetPassword.jsx";
import Audit from "./pages/Audit/Audit.jsx";
import AddKpo from "./pages/Admin/AddKpo/AddKpo.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/webinar/:id" element={<Webinar />} />
          <Route path="/upcomingWebinar/:id" element={<UpCommingWebinar />} />
          <Route path="/webinar-2" element={<Demandforecasting />} />
          <Route path="/webinar-3" element={<Budgeting />} />
          <Route path="/webinar-4" element={<Targetsetting />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="/career" element={<Career />} />
          <Route path="/lets-talk" element={<ContactUs />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/KPOServices" element={<Audit />} />


          {/* Admin Routes */}
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route
            path="/webinarData"
            element={
              <ProtectedRoute roleRequired="400">
                <WebinarData />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ourJourneyAdmin"
            element={
              <ProtectedRoute roleRequired="400">
                <Ourjourneyadmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/upcomingdataall"
            element={
              <ProtectedRoute roleRequired="400">
                <UpDataAll />
              </ProtectedRoute>
            }
          />
          <Route
            path="/upcomingdata"
            element={
              <ProtectedRoute roleRequired="400">
                <UpWebdata />
              </ProtectedRoute>
            }
          />
          <Route
            path="/getOurJourney"
            element={
              <ProtectedRoute roleRequired="400">
                <GetAllJourney />
              </ProtectedRoute>
            }
          />
          <Route
            path="/getWebinarData"
            element={
              <ProtectedRoute roleRequired="400">
                <GetWebinarData />
              </ProtectedRoute>
            }
          />
          <Route
            path="/feedbackdata"
            element={
              <ProtectedRoute roleRequired="400">
                <FeedBack />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobopenings"
            element={
              <ProtectedRoute roleRequired="400">
                <JobOpening />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admindashboard"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <AdminDashboard />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobdetails"
            element={
              <ProtectedRoute roleRequired="400">
                <JobDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/applicationDetails"
            element={
              <ProtectedRoute roleRequired="400">
                <ApplicationDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employeeimage"
            element={
              <ProtectedRoute roleRequired="400">
                <EmployeeImage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/clientList"
            element={
              <ProtectedRoute roleRequired="400">
                <EmployeeList />
              </ProtectedRoute>
            }
          />
          <Route path="/adminreg" element={<AdminReg />} />
          <Route
            path="/employeeData/:id"
            element={
              <ProtectedRoute roleRequired="400">
                <EmployeeData />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admincontactus"
            element={
              <ProtectedRoute roleRequired="400">
                <AdContact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/WatchNowDetails"
            element={
              <ProtectedRoute roleRequired="400">
                <WatchNowDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/projectDetails"
            element={
              <ProtectedRoute roleRequired="400">
                <ProjectDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/accelerators"
            element={
              <ProtectedRoute roleRequired="400">
                <OurJourneyAccelarators />
              </ProtectedRoute>
            }
          />
          <Route
            path="/acceleratorsAll"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <OurJourneyAccelaratorsAll />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ourSolution"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <OurSolution />
              </ProtectedRoute>
            }
          />
          <Route
            path="/industryimages"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <IndustryImages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/viewAllSolution"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <SolutionDataFull />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ServiceCounter"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <Solutioncounter />
              </ProtectedRoute>
            }
          />
          <Route
            path="/projectDetails"
            element={
              <ProtectedRoute roleRequired="400">
                <ProjectDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/accelerators"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <OurJourneyAccelarators />
              </ProtectedRoute>
            }
          />
          <Route
            path="/acceleratorsAll"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <OurJourneyAccelaratorsAll />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ourSolution"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <OurSolution />
              </ProtectedRoute>
            }
          />
          <Route
            path="/industryimages"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <IndustryImages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/viewAllSolution"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <SolutionDataFull />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ourServices"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <OurService />
              </ProtectedRoute>
            }
          />
          <Route
            path="/anaplanCounter"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <AnaplanCounter />
              </ProtectedRoute>
            }
          />
          <Route
            path="/industryImageList"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <IndustryImageList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/techPartners"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <TechPartners />
              </ProtectedRoute>
            }
          />

          <Route
            path="/PlanafinConsulting"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <PlanafinConsulting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/PlanafinConsultingAll"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <PlanafinConsultingAll />
              </ProtectedRoute>
            }
          />
          <Route
            path="/KPOform"
            element={
              <ProtectedRoute roleRequired="400">
                {" "}
                <AddKpo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resetPasswordUser/:userId/:token"
            element={<ResetPassword />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
