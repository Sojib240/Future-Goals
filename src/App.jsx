import React, { useState } from "react";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import LenisSmoothScroll from "./Utils/LenisSmoothScroll";
import Footer from "./Components/Common/Footer";
import GlobalPress from "./Pages/GlobalPress";
import FAQ from "./Pages/FAQ";
import AboutSandals from "./Pages/AboutSandals";
import AfcAbout from "./Pages/AfcAbout";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/Common/NavBar";
import About from "./Pages/About";
import SchoolPortal from "./Pages/SchoolPortal";
import News from "./Pages/News";
import Noise from "./Components/Common/Noise";
import ScrollToTop from "./Components/Common/ScrollToTop";
import NewsDetails from "./Pages/NewsDetails";
const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="relative">
            <div className="w-full h-screen fixed px-[18px] z-[9999999] pointer-events-none select-none">
                <Noise />
            </div>
            <LenisSmoothScroll />
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-sandals/" element={<AboutSandals />} />
                <Route path="/afc-about/" element={<AfcAbout />} />
                <Route path="/about/" element={<About />} />
                <Route path="/school-portal/" element={<SchoolPortal />} />
                <Route path="/global-press/" element={<GlobalPress />} />
                <Route path="/faq/" element={<FAQ />} />
                <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
                <Route path="/contact/" element={<Contact />} />
                <Route path="/news/" element={<News />} />
                <Route path="/news/:slug" element={<NewsDetails />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
