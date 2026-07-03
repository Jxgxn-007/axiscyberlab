import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Roadmap from "../pages/Roadmap";
import Domains from "../pages/Domains";
import Tools from "../pages/Tools";
import Courses from "../pages/Courses";
import NotFound from "../pages/NotFound";
import Services from "../pages/Services";
function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/roadmap" element={<Roadmap />} />

        <Route path="/domains" element={<Domains />} />

        <Route path="/tools" element={<Tools />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/services" element={<Services />} />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;