import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Timeline from "@/pages/Timeline";
import Sponsor from "@/pages/Sponsor";
import Faq from "@/pages/Faq";
import CustomCursor from "./components/ui/CustomCursor";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor />
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="timeline" element={<Timeline />} />
            <Route path="sponsor" element={<Sponsor />} />
            <Route path="faq" element={<Faq />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
