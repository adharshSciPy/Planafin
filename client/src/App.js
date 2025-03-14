import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Resources from "./pages/Resources/Resources";

import Aboutus from "./pages/Aboutus/Aboutus";
import Solutions from "./pages/Solutions/Solutions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
      <Route path="aboutus" element={<Aboutus/>}/>
      <Route path="solutions" element={<Solutions
       />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
