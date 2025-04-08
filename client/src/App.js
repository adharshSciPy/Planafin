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
          <Route path="/webinarData" element={<WebinarData />} />
          <Route path="/ourJourneyAdmin" element={<Ourjourneyadmin />} />
          <Route path="/getOurJourney" element={<GetAllJourney />} />
          <Route path="/getWebinarData" element={<GetWebinarData />} />
          <Route path="/feedbackdata" element={<FeedBack />} />
          <Route path="/jobopenings" element={<JobOpening />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/jobdetails" element={<JobDetails />} />
          <Route path="/applicationDetails" element={<ApplicationDetails />} />
          <Route path="/employeeimage" element={<EmployeeImage/>}/>
          {/* <Route
            path="/employeeimage"
            element={
              <ProtectedRoute roleRequired="400">
                <EmployeeImage />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/clientList" element={<EmployeeList />} />
          <Route path="/adminreg" element={<AdminReg />} />
          <Route path="/login" element={<Adminlogin />} />

          <Route path="/employeeData/:id" element={<EmployeeData />} />

          <Route path="/admincontactus" element={<AdContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
