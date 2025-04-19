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
import WatchNowDetails from "./pages/Admin/WatchNowDetails"
import ProjectDetails from "./pages/Admin/Project.jsx";
import OurJourneyAccelarators from "./pages/Admin/OurJourneyAccelarators.jsx"
import OurJourneyAccelaratorsAll from "./pages/Admin/OurJourneyAccelaratorsAll.jsx"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/webinar/:id" element={<Webinar />} />
          <Route path="/webinar-2" element={<Demandforecasting />} />
          <Route path="/webinar-3" element={<Budgeting />} />
          <Route path="/webinar-4" element={<Targetsetting />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="/career" element={<Career />} />
          <Route path="/lets-talk" element={<ContactUs />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/consultation" element={<Consultation />} />


          <Route path="/webinarData" element={<ProtectedRoute roleRequired="400"><WebinarData /></ProtectedRoute>} />
          <Route path="/ourJourneyAdmin" element={<ProtectedRoute roleRequired="400"><Ourjourneyadmin  /></ProtectedRoute>} />
          <Route path="/getOurJourney" element={<GetAllJourney  />} />
          <Route path="/getWebinarData" element={<GetWebinarData  />} />
          <Route path="/feedbackdata" element={<ProtectedRoute roleRequired="400">
            <FeedBack/>
          </ProtectedRoute>}/>
          <Route path="/jobopenings"element={<ProtectedRoute roleRequired="400">
            <JobOpening/>
          </ProtectedRoute>} />
          <Route path="/admindashboard" element={<ProtectedRoute roleRequired="400"> <AdminDashboard  /> </ProtectedRoute>} />
          <Route path="/jobdetails" element={<ProtectedRoute roleRequired="400"><JobDetails  /></ProtectedRoute>} />
          <Route path="/applicationDetails" element={<ProtectedRoute roleRequired="400"><ApplicationDetails  /></ProtectedRoute> } />
          <Route path="/employeeimage" element={<ProtectedRoute roleRequired="400">
            <EmployeeImage/>
          </ProtectedRoute>}/>
          {/* <Route
            path="/employeeimage"
            element={
              <ProtectedRoute roleRequired="400">
                <EmployeeImage />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/clientList" element={<ProtectedRoute roleRequired="400"><EmployeeList  /></ProtectedRoute>} />
          <Route path="/adminreg" element={<AdminReg />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/employeeData/:id" element={<EmployeeData  />} />
          <Route path="/admincontactus" element={<ProtectedRoute roleRequired="400"><AdContact  /></ProtectedRoute>} />
          <Route path="/WatchNowDetails" element={<ProtectedRoute roleRequired="400"><WatchNowDetails /></ProtectedRoute>} />
          <Route path="/projectDetails" element={ <ProtectedRoute roleRequired="400"><ProjectDetails /></ProtectedRoute>} />
          <Route path="/accelerators" element= {<OurJourneyAccelarators/>}/>
          <Route path="/acceleratorsAll" element= {<OurJourneyAccelaratorsAll/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
