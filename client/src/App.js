import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Resources from "./pages/Resources/Resources";

import Aboutus from "./pages/Aboutus/Aboutus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
      <Route path="aboutus" element={<Aboutus/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
